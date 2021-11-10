var button = document.getElementById('button');

button.addEventListener('click', function toto(){

        var fristName = document.getElementById('fristName').value;
        var lastName = document.getElementById('lastName').value;
        var city = document.getElementById('city').value;

        alert('\nNom : ' + fristName + '\n Prénom : ' + lastName + '\n City : ' + city);

    })
    