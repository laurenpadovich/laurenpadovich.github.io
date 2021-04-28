let months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
];
let d = new Date();
let monthNum = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = monthNum + "/" + d.getDate() + "/" + year + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();



let date = new Date();
document.getElementById("currentYear").textContent = date.getFullYear();
let lastUpdated = document.lastModified;
document.getElementById("lastUpdated").textContent = lastUpdated;