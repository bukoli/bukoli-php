<?php

namespace Bukoli;

use Bukoli\Exception\ServicePasswordException;
use DateTimeZone;

class Bukoli
{
    private static $defaultUrl = 'https://bukoli.borusan.com/IntegrationServiceTest/JetonOrderService.asmx?wsdl';

    /**
     * WSDL url
     *
     * @var string
     */
    protected static $url;

    /**
     * Size özel verdiğimiz şifre
     *
     * @var string
     */
    protected static $servicePassword;

    /**
     * Timezone
     *
     * @var DateTimeZone
     */
    protected static $dateTimeZone;

    /**
     * Bukoli Apisini başlatmak için gereklidir.
     *
     * @param $servicePassword string Size özel verdiğimiz şifre
     * @param null|string $url WSDL Url
     */
    public static function init($servicePassword, $url = null)
    {
        self::$servicePassword = $servicePassword;
        if (!is_null($url)) {
            self::setUrl($url);
        }
    }

    /**
     * WSDL url
     *
     * @return string
     */
    public static function getUrl()
    {
        return self::$url ?: self::$defaultUrl;
    }

    /**
     * WSDL url
     *
     * @param string $url
     */
    public static function setUrl($url)
    {
        self::$url = $url;
    }

    /**
     * Size özel verdiğimiz şifre
     *
     * @return string
     * @throws ServicePasswordException
     */
    public static function getServicePassword()
    {
        if (is_null(self::$servicePassword)) {
            throw new ServicePasswordException();
        }

        return self::$servicePassword;
    }

    /**
     * Size özel verdiğimiz şifre
     *
     * @param string $servicePassword
     */
    public static function setServicePassword($servicePassword)
    {
        self::$servicePassword = $servicePassword;
    }

    /**
     * Timezone
     *
     * @return DateTimeZone
     */
    public static function getDateTimeZone()
    {
        return self::$dateTimeZone ?: new DateTimeZone('Europe/Istanbul');
    }

    /**
     * Timezone
     *
     * @param DateTimeZone $dateTimeZone
     */
    public static function setDateTimeZone($dateTimeZone)
    {
        self::$dateTimeZone = $dateTimeZone;
    }
}