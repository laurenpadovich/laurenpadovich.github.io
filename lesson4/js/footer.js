/*let date = new Date();
document.getElementById("currentYear").textContent = date.getFullYear();
let lastUpdated = document.lastModified;
document.getElementById("lastUpdated").textContent = lastUpdated;*/

/* Date format example : Wednesday, 24 July 2020.*/

window.addEventListener('load', (event) => {
    const week = document.querySelector('#weekday');
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    week.textContent = weekday[d.getDay()];

    const dayNum = document.getElementById('day');
    dayNum.textContent = d.getDate();

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNum = document.getElementById('month');
    monthNum.textContent = monthName[d.getMonth()];

    const year = document.getElementById('year');
    year.textContent = d.getFullYear();

    const cry = document.querySelector("#currentyear");
    cry.textContent = d.getFullYear();
})