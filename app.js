
let navState = false;

let parallax = document.getElementById("parallax");
let hero = document.getElementById("hero");
let name = document.getElementById("name");
let resumeButton = document.querySelector('.button');

function showNav()
{
    let navBar = document.getElementById("main-nav");
    navBar.classList.toggle("visible");
    navState = !navState;
}

parallax.addEventListener('mousemove', (e) =>{
    let smooth = 40;
    let xAxis = (window.innerWidth / 2 - e.pageX)/smooth;
    let yAxis = (window.innerHeight / 2 - e.pageY)/smooth;
    hero.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    hero.style.transition = 'none';
});

parallax.addEventListener('mouseenter', (e) =>
{
    name.style.transform = 'translateZ(60px)';
    name.style.textShadow = '4px 4px 20px #141b229f';
    resumeButton.style.transform = 'translateZ(50px)';
});
    
parallax.addEventListener('mouseleave', (e) =>
{
    hero.style.transform = `rotateY(0deg) rotateX(0deg)`;
    hero.style.transition = 'transform 0.5s ease-in-out';
      name.style.transform = 'translateZ(0)';
    resumeButton.style.transform = 'translateZ(0)';
    name.style.textShadow = 'none';

});
