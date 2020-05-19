<?php


namespace App\Helper;


use \File;

class TrovieFile
{

    /**
     * @param File $file
     * @param String $des
     * @param String $custom_name
     * @return false|string
     */
    public static function storeFile($file, String $des, String $custom_name = null)
    {
        if ($custom_name) {
            return \Storage::putFileAs($des, $file, $custom_name);
        } else {
            return \Storage::putFile($des, $file);
        }
    }

    /**
     * @param File $file the new file to replace
     * @param String|string $old_file_name name of the file need to be replace full path
     * @param String|string $des new destination
     * @param String|null $custom_name keep the current file name or make a new name one.
     * @return false|string
     */
    public static function updateFIle(
        $file,
        $old_file_name,
        $des = '/storage',
        $custom_name = null
    ) {
        if (\Storage::exists($old_file_name)) {
            \Storage::delete($old_file_name);
        }
        return self::storeFile($file, $des);
    }

    public static function checkFile($file_path)
    {
        if (\Storage::exists($file_path)) {
            return 'storage/' . $file_path;
        }
        return 'storage/no_image.jpg';
    }

    public static function deleteFIle($file_path)
    {
        return \Storage::delete($file_path);
    }
}
