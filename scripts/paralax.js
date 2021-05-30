let stars = document.getElementById('stars');
let mountainsBehind = document.getElementById('mountains-behind');
let mountainsMiddle = document.getElementById('mountains-middle');
let mainText = document.getElementById('main-text');
let getImagesButonn = document.getElementById('get-images-from-nasa');
let mountainsFront = document.getElementById('mountains-front');

window.addEventListener('scroll', function() {
    let scrollValue = window.scrollY;
    stars.style.bottom = scrollValue * 0.5 + 'px';
    mountainsBehind.style.top = scrollValue * 0.3 + 'px';
    mountainsMiddle.style.top = scrollValue * 0.15 + 'px';
    mainText.style.marginTop = scrollValue * 1 + 'px';
    getImagesButonn.style.marginTop = scrollValue * 1.5 + 'px';
})