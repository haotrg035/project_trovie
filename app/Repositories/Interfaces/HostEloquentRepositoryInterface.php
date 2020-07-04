<?php


namespace App\Repositories\Interfaces;


interface HostEloquentRepositoryInterface
{

    public function updateAvatar(\Illuminate\Http\UploadedFile $file, $id);

    public function addGalleryImage(\Illuminate\Http\UploadedFile $file, $id);

    public function removeGalleryImage($image_id);

    public function destroyHost($id);
}
