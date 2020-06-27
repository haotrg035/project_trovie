<?php


namespace App\Repositories\Interfaces;


interface RoomArticleEloquentRepositoryInterface
{

    public function getListHostByUser($id);

    public function createArticle($attributes);

    public function getRoomArticle($id);

    public function updateArticle($attributes, $id);
}