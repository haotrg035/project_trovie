<?php


namespace App\Helper;

class  TrovieHelper
{
    public static function currencyFormat($str)
    {
        return ($str != 0) ? str_replace(',', '.', number_format($str)) : '0';
    }

    public static function parseCurrencyString($string)
    {
        return str_replace('.', '', $string);
    }

    public static function shortCurrencyFormat($int)
    {
        if (is_numeric($int)) {
            if ($int >= 1000000000) {
                return round($int / 1000000000, 2) . " tỷ";
            } else {
                if ($int >= 1000000) {
                    return round($int / 1000000, 2) . " triệu";
                } else {
                    return tien($int);
                }
            }
        } else {
            return 0;
        }
    }

    public static function stripAddressCompoentName($name)
    {
        $name = strtolower($name);
        return trim(str_replace(['huyện', 'quận', 'thành phố',], '', $name));
    }

    public static function convertAssocIdArrayToValueIdArray($assocArray = [], $key = 'id')
    {
        return array_map(function ($val) use ($key) {
            if (is_array($val)) {
                return $val[$key];
            }
            return $val->$key;
        }, $assocArray);
    }
}
