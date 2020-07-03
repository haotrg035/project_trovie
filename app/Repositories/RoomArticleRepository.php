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
    public function getArticles($total = 4, $conditions = [], $isResultPaginated = false, $isWhereIn = false, $whereInColumn = 'id')
    {
        $data = $this->_model->with([
            'room' => function ($query) {
                return $query->with([
                    'gallery',
                    'services',
                    'host' => function ($query) {
                        return $query->with([
                            'user' => function ($query) {
                                return $query->get()->append('phone');
                            }
                        ])->get();
                    },
                ])->get();
            }
        ])->orderBy('created_at', 'desc');
        if (!empty($conditions)) {
            if ($isWhereIn) {
                $data = $data->whereIn($whereInColumn, $conditions);
            } else {
                $data = $data->where($conditions);
            }
        }
        if ($isResultPaginated) {
            $data = $data->paginate($total);
            foreach ($data as $key => $val) {
                if (count($val->room->gallery) > 0) {
                    foreach ($val->room->gallery as $key2 => $image) {
                        $data[$key]->room->gallery[$key2]->image = asset(TrovieFile::checkFile($image->image));
                    }
                }
            }
        } else {
            $data = $data->limit($total)->get()->toArray();
            foreach ($data as $key => $val) {
                if (count($val['room']['gallery']) > 0) {
                    foreach ($val['room']['gallery'] as $key2 => $image) {
                        $data[$key]['room']['gallery'][$key2]['image'] = asset(TrovieFile::checkFile($image['image']));
                    }
                }
            }
        }

        return $data;
    }

    public function getArticle($id)
    {
        return $this->getArticles(1, [['id', '=', $id]], false)[0];
    }

    public function getNearArticles($currentHost, $total = 8, $distance = 0)
    {
        $hostRepository = new HostRepository();
        $result = [];
        $nearestHosts = $hostRepository->getClosestHostAround(
            [
                'lat' => $currentHost['latitude'],
                'long' => $currentHost['longitude'],
            ],
            $distance
        )->toArray();
        if (count($nearestHosts) > 0) {
            $listIds = [];
            foreach ($nearestHosts as $nearHost) {
                $_nearArticles = $this->getAllByHost($nearHost->id);
                $listIds = array_merge(
                    $listIds,
                    $_nearArticles ? $_nearArticles : []
                );
            }
            $listIds = TrovieHelper::convertAssocIdArrayToValueIdArray($listIds, 'id');
            $result = $this->getArticles($total, $listIds, false, true);
        }
        return $result;
    }

    protected function getArticlesByHosts($id, $total = 8, $paginateResult = false)
    {
        if (!is_array($id)) {
            $id = [$id];
        }
        $roomRepository = new RoomRepository();
        $rooms = $roomRepository->_model->whereIn('host_id', $id)->get('id')->toArray();
        if (!empty($rooms)) {
            return $this->getArticles($total,
                TrovieHelper::convertAssocIdArrayToValueIdArray($rooms),
                $paginateResult,
                true,
                'room_id');
        }
        return [];
    }

    public function search(array $params, $totalResultItems = 8, $isPaginatedResult = false)
    {
        $availableParams = ['city', 'district', 'q', 'host'];
        $placeParams = [];
        $hostParams = [];
//        $roomParams = [];
        $articleParams = [];
        $relatedRooms = [];
        $result = null;
        foreach ($params as $key => $param) {
            if (in_array($key, $availableParams) && $param !== null) {
                switch ($key) {
                    case $availableParams[0]:
                    case $availableParams[1]:
                    {
                        $placeParams[] = [$key . '_id', '=', $param];
                        break;
                    }
                    case $availableParams[2]:
                    {
                        $articleParams[] = ['title', 'LIKE', '%' . $param . '%'];
                    }
                    case $availableParams[3]:
                    {
                        $hostParams[] = $param;
                    }
                }
            }
        }
        if (!empty($hostParams)) {
            return $this->getArticlesByHosts($hostParams, $totalResultItems, $isPaginatedResult);
        }
        if (!empty($placeParams)) {
            $hostRepository = new HostRepository();
            $relatedHosts = $hostRepository->_model->with([
                'rooms' => function ($query) {
                    return $query->get('id')->toArray();
                }
            ])->where($placeParams)->get(['id'])->toArray();
            if (!empty($relatedHosts)) {
                foreach ($relatedHosts as $host) {
                    $relatedRooms = array_merge($relatedRooms, TrovieHelper::convertAssocIdArrayToValueIdArray($host['rooms'], 'id'));
                }
                if (!empty($relatedRooms)) {
                    if (!empty($articleParams)) {
                        $relatedArticles = $this->_model->whereIn('room_id', $relatedRooms)->where($articleParams)->get('id')->toArray();
                        $relatedArticles = TrovieHelper::convertAssocIdArrayToValueIdArray($relatedArticles);
                        if (!empty($relatedArticles)) {
                            return $this->getArticles(
                                $totalResultItems,
                                $relatedArticles,
                                $isPaginatedResult,
                                true, 'id'
                            );
                        }
                        return [];
                    }
                    return $this->getArticles($totalResultItems, $relatedRooms, $isPaginatedResult, true, 'room_id');
                }
            }
            return [];
        }
        if (!empty($articleParams)) {
            return $this->getArticles($totalResultItems, $articleParams, $isPaginatedResult);
        }
        return $this->getArticles($totalResultItems, [], $isPaginatedResult);
    }

    public function getAvailableHosts()
    {
        $hostRepository = new HostRepository();
        $roomRepository = new RoomRepository();
        $activeArticles = $this->_model->distinct('room_id')->get(['room_id'])->toArray();
        $activeHosts = $roomRepository->_model
            ->whereIn('id', TrovieHelper::convertAssocIdArrayToValueIdArray($activeArticles, 'room_id'))
            ->distinct('host_id')->get('host_id')->toArray();

        return $hostRepository->_model
            ->whereIn('id', TrovieHelper::convertAssocIdArrayToValueIdArray($activeHosts, 'host_id'))
            ->get(['id', 'name', 'longitude', 'image', 'latitude'])->toArray();
    }
}
