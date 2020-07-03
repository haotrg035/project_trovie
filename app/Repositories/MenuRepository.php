<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Models\Menu;
use App\Repositories\Interfaces\MenuEloquentRepositoryInterface;

class MenuRepository extends EloquentRepository implements MenuEloquentRepositoryInterface
{

    public function getModel()
    {
        return Menu::class;
    }

    public function getMenu()
    {
        $menus = $this->_model->orderBy('pos')->get()->toArray();
        $menus = TrovieHelper::dataTree($menus, 0, 0);

        return $menus;
    }

    public function updatePos($data)
    {
        try {
            $this->recursiveUpdatePos($data);
            return true;
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return false;
        }
    }

    protected function recursiveUpdatePos($menus, $parent_id = 0, $pos = 1)
    {
        foreach ($menus as $menu) {
            $this->_model
                ->where('id', $menu['id'])
                ->update([
                    'pos' => $pos++,
                    'parent_id' => $parent_id
                ]);
            if (!empty($menu['children'])) {
                $this->recursiveUpdatePos($menu['children'], $menu['id']);
            }
        }
        return true;
    }

    public function createMenu($data)
    {
        $lastPos = $this->_model->where('parent_id', '0')->count();
        return $this->create([
            'title' => $data['title'],
            'parent_id' => 0,
            'pos' => $lastPos + 1,
            'url' => $data['url'],
            'type' => $data['type']
        ]);
    }

    public function deleteMenu($id)
    {
        $childDelete = true;
        if ($this->_model->where('parent_id', $id)->exists()) {
            $childDelete = $this->_model->where('parent_id', $id)->delete();
        }
        return $childDelete && $this->find($id)->delete();
    }
}
