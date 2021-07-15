window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

function urgencyNum(urgency){
    document.querySelector('#urgency-show').textContent = urgency
}

window.addEventListener('load', () => {
var d = new Date();
const cry = document.querySelector("#currentyear");
    cry.textContent = d.getFullYear();

    
});