// https://api.openbrewerydb.org/breweries?by_city=los_angeles
console.log("connected to js")

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
  const cityName = document.querySelector('#breweryName').value;

  const breweryArr = cityName.split(" ");

  const url = `https://api.openbrewerydb.org/breweries?by_city=${breweryArr[0]}_${breweryArr[1]}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      const random = data[Math.floor(Math.random() * data.length)];
      console.log("data:" + random);

      const brewery = new BreweryInfo(random);
      brewery.testCall();
      brewery.listBreweries();
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

class BreweryInfo {
  constructor(breweryData) {
    this.name = breweryData.name;
    this.type = breweryData.brewery_type;
    this.street = breweryData.street;
  }
  
  testCall(){
    console.log("name of brewery: " + this.name);
  }

  listBreweries() {
    let tableRef = document.getElementById('brewery-table');


    let newRow = tableRef.insertRow(-1);
      let newNCell = newRow.insertCell(0);
      let newBTCell = newRow.insertCell(1);
      let newSCell = newRow.insertCell(2);

      let newNText = document.createTextNode(this.name.text);

      let newBTText = document.createTextNode(this.type.text);

      newNText.appendChild(newNText);
  }
}
