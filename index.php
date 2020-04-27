<?php

$_GET['array'] = array(3,2,1,4,15,18,13,99,77,66,1,100,0);
$array = $_GET['array'];

for($i = 0; $i < count($array); $i++)
{
    $min = $i;
    for($j=$i+1; $j<count($array); $j++) {
        if ($array[$min] > $array[$j]) {
            $min = $j;
        }
    }
    $tmp = $array[$i];
    $array[$i] = $array[$min];
    $array[$min] = $tmp;
}

print_r('<pre>');
print_r($array);
print_r('</pre>');
?>