var button = document
    .getElementById('button')
    .addEventListener('click', function modulo (){

        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;

        alert('Reste de la division : ' + (firstNumber % secondNumber));
    })
    