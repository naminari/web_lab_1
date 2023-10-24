let X, Y, R;


/* document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submit-button").addEventListener("click", submit);
    document.getElementById("clear-button").addEventListener("click", clearButton);
}); */

function checkX(){
    let X_text = document.getElementById("X-text");
    X = X_text.value.replace(",", ".");
    if (X.trim() === ""){
        X_text.setCustomValidity("Заполните поле");
        return false;
    } else if (!isFinite(X)){
        X_text.setCustomValidity("Должно быть число!");
        return false;
    } else if (X > 5 || X < -5){
        X_text.setCustomValidity("Вы вышли за диапазон [-5; 3]!");
        return false;
    }
    return true;
}

function checkY(){
    let Y_text = document.querySelector(".y-select").value;
    Y = Y_text.replace(",", ".");
    if (Y.trim() === ""){
        Y_text.setCustomValidity("Заполните поле");
        return false;
    } else if (!isFinite(Y)){
        Y_text.setCustomValidity("Должно быть число!");
        return false;
    } else if (Y > 5 || Y < -5){
        Y_text.setCustomValidity("Вы вышли за диапазон [-2; 2]!");
        return false;
    }
    return true;
}

function checkR(){
    let R_text = document.querySelector("input[name='radio']:checked").value;
    R = R_text.replace(",", ".");
    if (R.trim() === ""){
        R_text.setCustomValidity("Заполните поле");
        return false;
    } else if (!isFinite(R)){
        R_text.setCustomValidity("Должно быть число!");
        return false;
    } else if (R < 0){
        R_text.setCustomValidity("Радиус не может быть отрицательным")
        return false;
    } else if (R > 4 || R < 1){
        R_text.setCustomValidity("Вы вышли за диапазон [1; 4]!");
        return false;
    }
    return true;
}

async function submit(){

    if (!checkX()) return;
    if (!checkY()) return;
    if (!checkR()) return;

    let request = ("?x=" + X + "&y=" + Y + "&r=" + R);
    
    try {
        const response = await fetch(request + "php/check.php");
        const result = await response.text();
        document.getElementById("check").innerHTML = result;
    } catch (error) {
        console.log(error);
    }
};


async function clearButton(){
    try {
        const response = await fetch("php/clear_table.php");
        const result = await response.text();
        document.getElementById("check").innerHTML = result;
    } catch (error) {
        console.log(error);
    }
};

document.addEventListener("DOMContentLoaded", async function(){
    try{
        const response = await fetch("php/load.php");
        const result = await response.text();
        document.getElementById("check").innerHTML = result;
    } catch(error){
        console.log(error);
    }
})