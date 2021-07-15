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

    
    const MTURL = "https://api.openweathermap.org/data/2.5/weather?zip=59106&units=imperial&appid=90a195bc8abc0068ab71c9bb981b7699";
    fetch(MTURL)
    .then((response) => response.json())
    .then((curWeather) => {
        let temp = document.getElementById('billings-temp')
        let current = document.getElementById('billings-status')
        temp.textContent = Math.round(curWeather.main.temp)
        current.textContent = curWeather.weather[0].description
    })
    const MIURL = "https://api.openweathermap.org/data/2.5/weather?zip=48304&units=imperial&appid=90a195bc8abc0068ab71c9bb981b7699";
    fetch(MIURL)
    .then((response) => response.json())
    .then((curWeather) => {
        let temp = document.getElementById('detroit-temp')
        let current = document.getElementById('detroit-status')
        temp.textContent = Math.round(curWeather.main.temp)
        current.textContent = curWeather.weather[0].description
    })
    const UTURL = "https://api.openweathermap.org/data/2.5/weather?zip=84642&units=imperial&appid=90a195bc8abc0068ab71c9bb981b7699";
    fetch(UTURL)
    .then((response) => response.json())
    .then((curWeather) => {
        let temp = document.getElementById('manti-temp')
        let current = document.getElementById('manti-status')
        temp.textContent = Math.round(curWeather.main.temp)
        current.textContent = curWeather.weather[0].description
    })
    const TNURL = "https://api.openweathermap.org/data/2.5/weather?zip=38135&units=imperial&appid=90a195bc8abc0068ab71c9bb981b7699";
    fetch(TNURL)
    .then((response) => response.json())
    .then((curWeather) => {
        let temp = document.getElementById('memphis-temp')
        let current = document.getElementById('memphis-status')
        temp.textContent = Math.round(curWeather.main.temp)
        current.textContent = curWeather.weather[0].description
    })

    const templeJson = `{
        "temples":[
        {
            "name":"Billings Montana Temple",
            "phone":"406-655-0607",
            "address1":"3100 Rim Point Dr",
            "city":"Billings",
            "state":"MT",
            "zip":59106,
            "link":"https://www.churchofjesuschrist.org/temples/details/billings-montana-temple?lang=eng",
            "services":[
                "Clothing rental available",
                "No cafeteria available",
                "No patron housing available",
                "Distribution center nearby"
            ],
            "schedules":{
                "ordinances":"",
                "sessions":"",
                "closures":[
                    "Saturday, 2 October 2021",
                    "Monday, 11 October 2021 - Monday, 6 December 2021",
                    "Friday, 24 December 2021 - Saturday, 25 December 2021",
                    "Friday, December 2021 (Limited Operations)"
                ]
            },
            "imageurl":"https://assets.ldscdn.org/90/a0/90a0c0d599f94a2d955930e90fa95b9aa85a5004/idaho_falls_idaho_temple.png",
            "president":"Vernan G. Hogge"
        },
    
        {
            "name":"Detroit Michigan Temple",
            "phone":"248-593-0690",
            "address1":"37425 Woodward Ave",
            "city":"Bloomfield Hills",
            "state":"MI",
            "zip":48304,
            "link":"https://www.churchofjesuschrist.org/temples/details/detroit-michigan-temple?lang=eng",
            "services":[
                "No clothing rental available",
                "No cafeteria available",
                "No patron housing available",
                "No distribution center nearby"
            ],
            "schedules":{
                "ordinances":"",
                "sessions":"",
                "closures":[
                    "Monday, 12 July 2021",
                    "Wednesday, 24 November 2021 - Thursday, November 25 2021",
                    "Friday, 24 December 2021 - Saturday, 25 December 2021"
                ]
            },
            "imageurl":"https://assets.ldscdn.org/90/a0/90a0c0d599f94a2d955930e90fa95b9aa85a5004/idaho_falls_idaho_temple.png",
            "president":"Kaplin S. Jones"
        },
        {
            "name":"Manti Utah Temple",
            "phone":"435-835-2291",
            "address1":"200 E 510 N",
            "city":"Manti",
            "state":"UT",
            "zip":84642,
            "link":"https://www.churchofjesuschrist.org/temples/details/manti-utah-temple?lang=eng",
            "services":[
                "Clothing rental available",
                "No cafeteria available",
                "No patron housing available",
                "Distribution center nearby"
            ],
            "schedules":{
                "ordinances":"",
                "sessions":"",
                "closures":[
                    "Saturday, 24 July 2021",
                    "Saturday, 2 October 2021",
                    "Sunday, 3 October 2021 - Wednesday, 18 October 2021",
                    "Wednesday, 24 November 2021 (Limited Operations)",
                    "Friday, 31 December 2021 (Limited Operations)"
                ]
            },
            "imageurl":"https://assets.ldscdn.org/90/a0/90a0c0d599f94a2d955930e90fa95b9aa85a5004/idaho_falls_idaho_temple.png",
            "president":"Richard W. Wheeler"
        },
        {
            "name":"Memphis Tennessee Temple",
            "phone":"901-379-0202",
            "address1":"4199 Kirby-Whitten Pkwy",
            "city":"Bartlett",
            "state":"TN",
            "zip":38135,
            "link":"https://www.churchofjesuschrist.org/temples/details/memphis-tennessee-temple?lang=eng",
            "services":[
                "No Clothing rental available",
                "No cafeteria available",
                "No patron housing available",
                "No Distribution center nearby"
            ],
            "schedules":{
                "ordinances":"",
                "sessions":"",
                "closures":[
                    "Saturday, 2 October 2021",
                    "Monday, 4 October 2021 - Monday, 18 October 2021",
                    "Wednesday, 24 November 2021 - Thursday, 25 December 2021",
                    "Friday, 24 December 2021 - Saturday, 25 December 2021",
                    "Friday, 31 December 2021 - Saturday, 1 January 2022",
                    "Monday, 4 April 2022 - Monday, 30 May 2022"
                ]
            },
            "imageurl":"https://assets.ldscdn.org/90/a0/90a0c0d599f94a2d955930e90fa95b9aa85a5004/idaho_falls_idaho_temple.png",
            "president":"Robert G.McBride"
        } 
    ]
    }`;
    
    const templedata = JSON.parse(templeJson);
    
    const temples = templedata.temples;
     
        for(let i = 0; i<temples.length;i++){
            let temple = temples[i];
            if (temple.name == 'Billings Montana Temple'){
               let temple = temples[0] 
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let city = document.createElement('p');
            let phone = document.createElement('p');
            let servicesHeading = document.createElement('h3');
            let closuresHeading = document.createElement('h3');
    
            name.textContent = temple.name;
            address.textContent= "Address: " + temple.address1;
            city.textContent= temple.city + ", " + temple.state + " " +temple.zip;
            phone.textContent= "Phone Number: " +temple.phone;
            servicesHeading.textContent="Services";
            closuresHeading.textContent="Closures";

            const cards = document.querySelector("#card1");
            cards.appendChild(name);
            cards.appendChild(address);
            cards.appendChild(city);
            cards.appendChild(phone);
            cards.appendChild(servicesHeading);
    
    for(let i = 0; i <temple.services.length;i++){
        let services =document.createElement('p');
        services.textContent = temple.services[i];
        cards.appendChild(services);
    }
    cards.appendChild(closuresHeading);
    
    for(let i = 0; i <temple.schedules.closures.length;i++){
        let closures =document.createElement('p');
        closures.textContent = temple.schedules.closures[i];
        cards.appendChild(closures);
    }
            }
    
        if (temple.name == "Detroit Michigan Temple"){
           let temple = temples[1] 
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let city = document.createElement('p');
        let phone = document.createElement('p');
        let servicesHeading = document.createElement('h3');
        let closuresHeading = document.createElement('h3');
    
        name.textContent = temple.name;
        address.textContent= "Address: " + temple.address1;
        city.textContent= temple.city + ", " + temple.state + " " +temple.zip;
        phone.textContent= "Phone Number: " +temple.phone;
        servicesHeading.textContent="Services";
        closuresHeading.textContent="Closures";

        const cards = document.querySelector("#card2");
        cards.appendChild(name);
        cards.appendChild(address);
        cards.appendChild(city);
        cards.appendChild(phone);
        cards.appendChild(servicesHeading);
    
    for(let i = 0; i <temple.services.length;i++){
    let services =document.createElement('p');
    services.textContent = temple.services[i];
    cards.appendChild(services);
    }
    
    cards.appendChild(closuresHeading);
    
    for(let i = 0; i <temple.schedules.closures.length;i++){
    let closures =document.createElement('p');
    closures.textContent = temple.schedules.closures[i];
    cards.appendChild(closures);
    }
        }
        
        if (temple.name == "Manti Utah Temple"){
           let temple = temples[2] 
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let city = document.createElement('p');
        let phone = document.createElement('p');
        let servicesHeading = document.createElement('h3');
        let closuresHeading = document.createElement('h3');
        let link = document.querySelector('#links');
    
        name.textContent = temple.name;
        address.textContent= "Address: " + temple.address1;
        city.textContent= temple.city + ", " + temple.state + " " +temple.zip;
        phone.textContent= "Phone Number: " +temple.phone;
        servicesHeading.textContent="Services";
        closuresHeading.textContent="Closures";

        const cards = document.querySelector("#card3");
        cards.appendChild(name);
        cards.appendChild(address);
        cards.appendChild(city);
        cards.appendChild(phone);
        cards.appendChild(servicesHeading);
    
    for(let i = 0; i <temple.services.length;i++){
    let services =document.createElement('p');
    services.textContent = temple.services[i];
    cards.appendChild(services);
    }
    
    cards.appendChild(closuresHeading);
    
    for(let i = 0; i <temple.schedules.closures.length;i++){
    let closures =document.createElement('p');
    closures.textContent = temple.schedules.closures[i];
    cards.appendChild(closures);
    }
    }; 
        if (temple.name == "Memphis Tennessee Temple"){
          let temple = temples[3]  
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let city = document.createElement('p');
        let phone = document.createElement('p');
        let servicesHeading = document.createElement('h3');
        let closuresHeading = document.createElement('h3');

        name.textContent = temple.name;
        address.textContent= "Address: " + temple.address1;
        city.textContent= temple.city + ", " + temple.state + " " +temple.zip;
        phone.textContent= "Phone Number: " +temple.phone;
        servicesHeading.textContent="Services";
        closuresHeading.textContent="Closures";
    
        const cards = document.querySelector("#card4");
        cards.appendChild(name);
        cards.appendChild(address);
        cards.appendChild(city);
        cards.appendChild(phone);
        cards.appendChild(servicesHeading);
    
    for(let i = 0; i <temple.services.length;i++){
    let services =document.createElement('p');
    services.textContent = temple.services[i];
    cards.appendChild(services);
    }
    
    cards.appendChild(closuresHeading);
    
    for(let i = 0; i <temple.schedules.closures.length;i++){
    let closures =document.createElement('p');
    closures.textContent = temple.schedules.closures[i];
    cards.appendChild(closures);
    }
    
    }
        }
});