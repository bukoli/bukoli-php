<?php

namespace Bukoli\Soap;

interface ClientInterface
{
    public function request($name, $params);
}