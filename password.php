<?php
function main(){
$password = $_GET["password"];
$passwordarray = str_split($password);
$uppercase = uppercase($passwordarray);
$lowercase = lowercase($passwordarray);
$numbers = numbers($passwordarray);
$length8 = length($password);
returnfunc($uppercase, $lowercase, $numbers, $length8);
};
function length($password){
if (strlen($password) >= 8){
        return ":D";
    } else {
        return "X";
    };
};
function uppercase($passwordarray){
foreach ($passwordarray as $value){
if (ctype_upper($value)){
            return ":D";
        };
    };
    return "X";
};
function lowercase($passwordarray){
foreach ($passwordarray as $value){
if (ctype_lower($value)){
            return ":D";
        };
    };
    return "X";
};
function numbers($passwordarray){
foreach ($passwordarray as $value){
if (is_numeric($value)){
            return ":D";
        };
    };
    return "X";
};
function returnfunc($uppercase, $lowercase, $numbers, $length8){
$message = "Uppercase: $uppercase | Lowercase: $lowercase | Numbers: $numbers | Length: $length8";
$return = array(
"message" => $message
    );
echo json_encode($return);
};
 main();

?> 
