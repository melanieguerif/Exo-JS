var corectAnswer = 'Melanie';
var userName = document.getElementById('userName');


userName.addEventListener('keyup', function(){
    if( userName.value == corectAnswer){
        document.getElementById('divSuccess').classList.replace ("d-none","d-block");
        document.getElementById('divFailed').classList.replace ("d-block","d-none");
        userName.style.background = "green";

    } else{
        document.getElementById('divFailed').classList.replace("d-none","d-block");
        document.getElementById('divSuccess').classList.replace ("d-block","d-none");
        userName.style.background = "red";

    }
})