const explorebBtn = document.getElementById('exploreBtn');
const boxContainer = document.querySelector('.box-container');
const homeBtn = document.getElementById('home');
const box = document.querySelector('.box');


exploreBtn.addEventListener('click', function () {
    boxContainer.classList.toggle('hideBox');
    box.classList.toggle('appear');
})

homeBtn.addEventListener('click', function() {
    boxContainer.classList.toggle('hideBox');
    box.classList.toggle('appear');
})

const aboutBtn = document.getElementById('about');
const aboutSection = document.getElementById('aboutSection');

aboutBtn.addEventListener('click', function(){
    boxContainer.classList.toggle('hideBox');
    box.classList.toggle('appear');
    aboutSection.scrollIntoView();
})


