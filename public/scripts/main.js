const $header = document.querySelector("header");
const $logo = document.querySelectorAll('.logo')[0];
window.addEventListener('scroll', toggleHeader, false);


function toggleHeader(){
    //Se a page for rolada E conter o max-header então tira o max e põe o min
    if(window.pageYOffset > 80 && $header.classList.contains('max-header')){
        //console.log('menor');
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        //$logo.firstElementChild.setAttribute("src", "/public/assets/images/Logo robot green circle .png");

    } else if(window.pageYOffset <= 80 && $header.classList.contains('min-header')){
        //console.log('MAIOR');
        $header.classList.remove('min-header');
        $header.classList.add('max-header');
        //$logo.firstElementChild.setAttribute("src", "/public/assets/images/1.png")
    }
}

function downImage20(image){
    image.width = image.width - 40;
    image.heigh = image.heigh - 40;
}

function upperImage20(image){
    image.width += 20;
    image.heigh += 20;
}