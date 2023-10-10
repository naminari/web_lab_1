<?php

function checkDataValid($x, $y, $r){
    return checkDigitsAfterDot($x, $y, $r) &&
        is_numeric($x) && $x >= -5 && $x <= 3 &&
        in_array($y, array(-2, -1.5,-1,-0.5, 0, 0.5, 1, 1.5, 2), false) &&
        is_numeric($r) && $r >= 1 && $r <= 4;
}

function checkDigitsAfterDot($x, $y, $r){
    if (is_numeric($x) && is_numeric($y) && is_numeric($r)){
        $xArray = explode(".", $x);
        $yArray = explode(".", $y);
        $rArray = explode(".", $r);
        if ((strlen($xArray[1]) <= 14) && (strlen($yArray[1]) <= 14) && (strlen($rArray[1]) <= 14)) return true;
    }
    return false;
}

function atArea($x, $y, $r){
    return
        (($x >= 0) && ($x <= $r/2) && ($y <= 0) && ($y >= $r)) || // Прямоугольник
        (($x <= 0) && ($y >= 0) && ($x ** 2 + $y ** 2 <= $r ** 2)) || // 1/4 Круга
        (($x >= 0) && ($x <= $r) && ($y >= 0) && ($y <= $r) && ($y >= -$x + $r)); // Треугольник
}

session_start();
$start = microtime(true);
date_default_timezone_set('Europe/Moscow');

$x = isset($_GET["x"]) ? $_GET["x"] : null;
$y = isset($_GET["y"]) ? str_replace(",", ".", $_GET["y"]) : null;
$r = isset($_GET["y"]) ? str_replace(",", ".", $_GET["r"]) : null;

if (!checkDataValid($x, $y, $r)){
    http_response_code(400);
    return;
}

if (!isset($_SESSION['data'])){
    $_SESSION['data'] = array();
}

$coordinatesAtArea = atArea($x, $y, $r);
$currentTime = date("H:i:s");
$time = number_format(microtime(true) - $start, 10, ".", "") * 1000000;
$result = array($x, $y, $r, $currentTime, $time, $coordinatesAtArea);
array_push($_SESSION["data"], $result);

include "add_in_table.php";
