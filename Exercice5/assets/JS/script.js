//Methode avec arguments

function modulo(toto, tata){
    return toto % tata
}

alert(modulo (10, 3));

//Methode sans arguments

document.getElementById('button').addEventListener('click', function modulo(){
    alert('Reste de la division : ' + document.getElementById('firstNumber').value % document.getElementById('secondNumber').value)
})
