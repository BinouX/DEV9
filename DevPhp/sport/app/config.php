<?php
define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('DB', 'tp-chrono-sport');
function utf8_encode_recursive ($array)
{
    $result = array();
    foreach ($array as $key => $value)
    {
        if (is_array($value))
        {
            $result[$key] = utf8_encode_recursive($value);
        }
        else if (is_string($value))
        {
            $result[$key] = utf8_encode($value);
        }
        else
        {
            $result[$key] = $value;
        }
    }
    return $result;
}
?>
