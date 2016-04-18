<?php

namespace Bukoli\Exception;

class ServicePasswordException extends Exception
{
    public function __construct($message = "", $code = 0, Exception $previous = null)
    {
        parent::__construct('Service Password is required.', $code, $previous);
    }
}