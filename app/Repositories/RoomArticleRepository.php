<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Models\RoomArticle;
use App\Repositories\Interfaces\RoomArticleEloquentRepositoryInterface;

class RoomArticleRepository extends EloquentRepository implements RoomArticleEloquentRepositoryInterface
{

    public function getModel()
    {
        return RoomArticle::class;
    }

    public function getAllByRoom($ids)
    {
        $rooms = [];
        $result = [];
        if (!is_array($ids)) {
            $ids = [$ids];
        }
        try {
            $roomRepository = new RoomRepository();
            $rooms = $roomRepository->_model->with([
                'articles'
            ])->whereIn('id', $ids)->get()->toArray();
        } catch (\Exception $e) {
            \Log::error('get Articles failed, Error: ' . $e->getMessage());
        }

        if ($rooms) {
            foreach ($rooms as $room) {
                if (!empty($room['articles'])) {
                    foreach ($room['articles'] as $article) {
                        $result[] = array_merge(
                            $article, [
                            'room_name' => $room['name'],
                            'host_id' => $room['host_id'],
                            'url' => [
                                'delete' => route('api.user.article.delete', $article['id']),
                                'refresh' => route('api.user.article.refresh', $article['id']),
                                'show' => route('api.user.article.show', $article['id']),
                                'update' => route('api.user.article.update', $article['id'])
                            ]
                        ]);
                    }
                }
            }
            return $result;
        }
        return false;
    }

    public function getAllByHost($id)
    {
        $list_room_id = TrovieHelper::convertAssocIdArrayToValueIdArray(
            \DB::table('rooms')->where('host_id', $id)->get('id')->toArray(),
            'id'
        );
        return $this->getAllByRoom($list_room_id);
    }

    public function refresh($id)
    {
        $result = ['data' => false, 'error' => ''];
        try {
            $article = $this->find($id);
            if (time() > (strtotime($article['created_at']) + TrovieHelper::getMinuteToTimeStamp(60 * 12))) {
                $result['data'] = $this->_model->where('id', $id)->update([
                    'created_at' => date('Y-m-d H:i:s', time())
                ]);
            } else {
                $result['error'] = 'Vui lòng làm mới tin sau 12 giờ kể từ thời điểm đăng!';
            }
        } catch (\Exception $e) {
            \Log::error('Fail to refresh article, ' . $e->getMessage());
        }
        return $result;
    }

    public function createArticle($attributes)
    {
//        $data = array_diff_key($attributes, ['api_token' => 1, 'room' => 1]);
        $data['title'] = $attributes['title'];
        $data['room_id'] = $attributes['room'];
        $data['content'] = !empty($attributes['content']) ? $attributes['content'] : '';
        $result = $this->create($data);
        if ($result) {
            return $result;
        }
        return false;
    }

    public function getRoomArticle($id)
    {
        return $this->find($id);
    }

    public function updateArticle($attributes, $id)
    {
        $data['title'] = $attributes['title'];
        $data['content'] = $attributes['content'];
        $data['room_id'] = $attributes['room'];
        $this->_result['data'] = $this->update($id, $data);
        return $this->_result;
    }

    // Front end
    public function getArticles($total = 4)
    {
        $data = $this->_model->with([
            'room' => function ($query) {
                return $query->with([
                    'gallery',
                    'host' => function ($query) {
                        return $query->with([
                            'user' => function ($query) {
                                return $query->get()->append('phone');
                            }
                        ])->get();
                    }
                ])->get();
            }
        ])->orderBy('created_at', 'desc')->paginate($total);
        foreach ($data as $key => $val) {
            if (count($val['room']['gallery']) > 0) {
                foreach ($val['room']['gallery'] as $key2 => $image) {
                    $data[$key]['room']['gallery'][$key2]['image'] = asset(TrovieFile::checkFile($image['image']));
                }
            }
        }
        return $data;
    }
}
