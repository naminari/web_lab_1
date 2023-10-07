let X_id = "X-text";
let Y_id = "Y-text";
let R_id = "R-text";


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submit-button").addEventListener("click", submit);
    document.getElementById("clear-button").addEventListener("click", clearButton);
});

function chechCoordinate(coordinate_element, min, max){
    let cooordinate_text = document.getElementById(coordinate_element.id);
    let coordinate_value = cooordinate_text.value.replace(",",".");
    if (coordinate_value.trim() === ""){
        coordinate_element.setCustomValidity("Заполните поле");
        return false;
    } else if(!isFinite(coordinate_value)){
        coordinate_element.setCustomValidity("Должно быть число!");
        return false;
    } else if (coordinate_value > max || coordinate_value < min){
        coordinate_element.setCustomValidity("Вы вышли за диапазон [" + min + ";" + max + "]!");
        return false;
    }
    coordinate_element.setCustomValidity("");
    return true;
}


const submit = function (e){
    let X_element = document.getElementById(X_id);
    let Y_element = document.getElementById(Y_id);
    let R_element = document.getElementById(R_id);
    if (!chechCoordinate(X_element, -5, 3)) return;
    if (!chechCoordinate(Y_element, -2, 2)) return;
    if (!chechCoordinate(R_element, 1, 4)) return;
    e.preventDefoult();

    let request = ("?x=" + X + "&y=" + Y + "&r=" + R);
    
    fetch("php/check.php" + request)
        .then(response => response.text())
        .then(response => document.getElementById("check").innerHTML = response);
};
const clearButton = function (e){
    e.preventDefault();
    fetch("php/clear_table.php")
        .then(response => response.text())
        .then(response => document.getElementById("check").innerHTML = response)
};
