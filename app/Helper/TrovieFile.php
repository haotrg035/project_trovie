<?php


namespace App\Helper;


use \File;

abstract class TrovieFile
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
     * @param String $old_file_name name of the file need to be replace full path
     * @param String $des new destination or use old one
     * @param String|null $custom_name keep the current file name or make a new name one.
     * @return false|string
     */
    public static function updateFIle($file, String $old_file_name, String $des = null, String $custom_name = null)
    {
        $fileDes = explode('/', $old_file_name);
        if (count($fileDes) > 1) {
            if ($fileDes[0] !== '') {
                $fileDes = $fileDes[0];
            } else {
                $fileDes = '/';
            }
        } else {
            $fileDes = '/';
        }
        if ($des !== null) {
            $fileDes = $des;
        }
        if (\Storage::exists($old_file_name)) {
            \Storage::delete($old_file_name);
        }
        return self::storeFile($file, $fileDes);
    }

}
