<?php

namespace Bukoli\Request;

interface RequestInterface
{
    public function request();

    public function response();

    public function toArray();
}