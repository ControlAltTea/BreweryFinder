// https://api.openbrewerydb.org/breweries?by_city=los_angeles
console.log("connected to js")

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {

  const cityName = document.querySelector('#cityName').value;

  const breweryArr = cityName.split(" ");

  const url = `https://api.openbrewerydb.org/breweries?by_city=${breweryArr[0]}_${breweryArr[1]}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      breweryNames = data.map(el => el.name);
      console.log("first brewery: " + breweryNames[0]);
      breweryTypes = data.map(el => el.brewery_type);
      breweryLocations = data.map(el => el.street);
      breweryWebsites = data.map(el => el.website_url);

      breweryNames.forEach((element, index, array) => {
        const brewery = new BreweryInfo(data[index]);
        console.log(brewery);
        brewery.testCall();
        brewery.listBreweries();
      })
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  
    class BreweryInfo {
      constructor(breweryData) {
        this.name = breweryData.name;
        this.brewery_type = breweryData.brewery_type;
        this.street = breweryData.street;
        this.website = breweryData.website_url;
      }
      
      testCall(){
        console.log(this.name);
      }

      listBreweries() {

        let tableRef = document.getElementById('brewery-table');

        let newRow = tableRef.insertRow(-1);
        let newNCell = newRow.insertCell(0);
        let newBTCell = newRow.insertCell(1);
        let newSCell = newRow.insertCell(2);
        let newWCell = newRow.insertCell(3);

        let newNText = document.createTextNode(`${this.name}`);

        let newBTText = document.createTextNode(`${this.brewery_type}`);
  
        let newSTtext = document.createTextNode(`${this.street}`);
        let newWText = document.createTextNode(`${this.website}`);
    
        // // Create a foreach to cycle through the array of objects
        for (let arr of breweryNames) {
          newNCell.appendChild(newNText);
        }

        for (let arr of breweryTypes) {
          newBTCell.appendChild(newBTText);
        }

        for (let arr of breweryLocations) {
          newSCell.appendChild(newSTtext);
        }
        
        for (let arr of breweryWebsites) {
          newWCell.appendChild(newWText);
        }
      }
    }
}
