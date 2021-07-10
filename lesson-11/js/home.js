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
            if (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'){
                
                let townsSection = document.getElementById('towns-section')
                
                let townSection = document.createElement('section')

                let text = document.createElement('div')

                let name = document.createElement('h2')
                let phrase = document.createElement('p')
                let year = document.createElement('h4')
                let pop = document.createElement('h4')
                let rain = document.createElement('h4')
                let image = document.createElement('img')

                name.textContent = town.name
                phrase.textContent = town.motto
                year.textContent = 'Year Founded: ' + town.yearFounded
                pop.textContent = 'Population: ' + town.currentPopulation
                rain.textContent = 'Annual Rain Fall: ' + town.averageRainfall
                image.src = 'images/' + town.photo

                text.appendChild(name)
                text.appendChild(phrase)
                text.appendChild(year)
                text.appendChild(pop)
                text.appendChild(rain)

                townSection.append(text)
                townSection.appendChild(image)

                townsSection.appendChild(townSection)

            }
        }
    })
})