var img = document.getElementById('img');

function changeImg(imgSource){
    img.src = imgSource;
}

img.addEventListener("mouseenter" , function(){
    changeImg("img/Chat.jpg")
    });


img.addEventListener("mouseleave" , function(){
        changeImg("img/Tigre.jpg")
    })

