var button = document
    .getElementById('button')
    .addEventListener('click', function resultat (){

        var shoeSize = document.getElementById('shoeSize').value;
        var birthYear = document.getElementById('birthYear').value;

        alert('Résultat : ' + ((( shoeSize / birthYear + 5) * 50 - birthYear) + 1769 ))
    })
    