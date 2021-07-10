const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=90a195bc8abc0068ab71c9bb981b7699";
fetch(apiURL)
    .then((response) => response.json())
    .then((curWeather) => {

        let current = document.getElementById('status')
        let temp = document.getElementById('temp')
        let high = document.getElementById('high')
        let humidity = document.getElementById('humid')
        let speed = document.getElementById('wind')

        current.textContent = curWeather.weather[0].description
        temp.textContent = Math.round(curWeather.main.temp)
        high.textContent = Math.round(curWeather.main.temp_max)
        humidity.textContent = curWeather.main.humidity
        speed.textContent = Math.round(curWeather.wind.speed)

        const calcWindChill = (temperature, speed) => {
            if (temperature <= 50 && speed > 3){
                return Math.round(
                    35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature
                    * Math.pow(speed, 0.16)))) + "°F"
            }
            else{
                return "N/A"
            }
        }
    
        const displayWindChill = () => {
            let temperature = document.getElementById("temp").textContent;
            let wind = document.getElementById("wind").textContent;
            let result = calcWindChill(temperature, wind);
            document.getElementById("chill").innerHTML = result;
        }
        displayWindChill();
    })

     const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=90a195bc8abc0068ab71c9bb981b7699&units=imperial'

     fetch(forecastURL)
     .then((response) => {
         return response.json()
     })
     .then((fiveDayForecast) => {
            let count = 0;
            var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
            fiveDayForecast.list.forEach(element => {
                if(element.dt_txt.includes('18:00:00')){
                    document.querySelector('#day' + count).textContent = (dayNames[new Date(element.dt_txt.slice(0, 10)).getDay()]);
    
                    document.querySelector('#temp' + count).textContent = Math.round(element.main.temp_max) + " °F";
    
                    document.querySelector('#forecastimg' + count).setAttribute('src', "http://openweathermap.org/img/wn/" + element.weather[0].icon + ".png")
                    
                    count = count + 1;
                };
            })
        });
        window.addEventListener("load", (event) => {
            requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
        
            fetch(requestURL)
            .then(function (response) {
                return response.json()
            })
            .then(function (townData) {
                const towns = townData.towns
                for (let i = 0; i < towns.length; i++){
                    let town = towns[i]
                    if (town.name == 'Fish Haven'){
                        let eventCard = document.createElement('section');
                let eventText = document.createElement('div');
                let eventLine = document.createElement('h3');
                let line = document.createElement('hr');

                for(let i = 0; i <town.events.length;i++){
                    let eventDesc =document.createElement('p');
                    eventDesc.textContent = town.events[i];
                    eventText.appendChild(eventDesc);
                }
                eventLine.textContent = "Upcoming Events:";
                eventCard.appendChild(eventLine);
                eventCard.appendChild(line);
                eventCard.appendChild(eventText);

                document.querySelector("#event").appendChild(eventCard);
            }
                }
            })
        });