const $header = document.querySelector("header");
window.addEventListener('scroll', toggleHeader, false);


function toggleHeader(){
    //Se a page for rolada E conter o max-header então tira o max e põe o min
    if(window.pageYOffset > 80 && $header.classList.contains('max-header')){
        $header.classList.remove('max-header');
        $header.classList.add('min-header');

    } else if(window.pageYOffset <= 80 && $header.classList.contains('min-header')){
        $header.classList.remove('min-header');
        $header.classList.add('max-header');
    }
}

function cvDownloaded(){
    alert("Obrigado por baixar!\nThanks for download!")
}