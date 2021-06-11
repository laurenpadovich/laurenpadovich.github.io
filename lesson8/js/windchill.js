window.addEventListener('load', () => {
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