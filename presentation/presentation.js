let marvelJSON = {
    "marvel-characters": [
        {
            "villians": [
                {
                    "name": "Loki",
                    "home": "Asgard"
                },
                {
                    "name": "Thanos",
                    "home": "Titan"
                }
            ],
            "heroes": [
                {
                    "name": "Thor",
                    "home": "Asgard"
                },
                {
                    "name": "Iron Man",
                    "home": "Earth"
                }
            ]
        }
    ]
}
console.log(marvelJSON);

let marvelString = `{
    "marvel-characters": [
        {
            "villians": [
                {
                    "name": "Loki",
                    "home": "Asgard"
                },
                {
                    "name": "Thanos",
                    "home": "Titan"
                }
            ],
            "heroes": [
                {
                    "name": "Thor",
                    "home": "Asgard"
                },
                {
                    "name": "Iron Man",
                    "home": "Earth"
                }
            ]
        }
    ]
}`
const marvelParse = JSON.parse(marvelString);
console.log(marvelParse);
const marvel = marvelParse["marvel-characters"];
console.log(marvel);
const characters = marvel[0];
console.log(characters);
const villians = characters["villians"];
console.log(villians[0].name);

var text, parser, xmlDoc;

text = "<marvel-characters><villians>" +
    "<name>Loki</name>" +
    "<home>Asgard</home>" +
"</villians></marvel-characters>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

console.log(xmlDoc);
console.log(xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue);