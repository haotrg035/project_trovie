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

    public static function currencyFormatWord($int)
    {
        if (is_numeric($int)) {
            if ($int >= 1000000000) {
                return round($int / 1000000000, 2) . " tỷ";
            } else {
                if ($int >= 1000000) {
                    return round($int / 1000000, 2) . " tr";
                } else {
                    return TrovieHelper::currencyFormat($int) . ' đ';
                }
            }
        } else {
            return 0;
        }
    }

    public static function stripAddressComponentName($name)
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

    /**
     * @param int $length expected string length
     * @param int $type Type of expected string 0 for full, 1 for number only, 2 for alphabet only
     * @return string
     */
    public static function generateRandomString($length = 10, $type = 0)
    {
        $numbers = '0123456789';
        $alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $characters = '';
        switch ($type) {
            case 0:
            {
                $characters = $numbers . $alphabets;
                break;
            }
            case 1:
            {
                $characters = $numbers;
                break;
            }
            case 2:
            {
                $characters = $alphabets;
            }
        }
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public static function convertDateFormat($date, $from = 'dmY')
    {
        if ($from === 'Ymd') {
            return implode('/', array_reverse(explode('-', $date)));
        }
        return implode('-', array_reverse(explode('/', $date . '')));
    }

    public static function getMinuteToTimeStamp($minutes)
    {
        return $minutes * (60);
    }

    public static function getDayToTimeStamp($day)
    {
        return $day * 60 * 60 * 24;
    }
}
