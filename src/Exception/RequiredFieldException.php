<?php

namespace Bukoli\Exception;

class RequiredFieldException extends Exception
{
    public function __construct($field = "", $code = 0, Exception $previous = null)
    {
        parent::__construct($field . ' is required.', $code, $previous);
    }

}