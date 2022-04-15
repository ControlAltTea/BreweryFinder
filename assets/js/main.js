// https://api.openbrewerydb.org/breweries?by_city=los_angeles
console.log("connected to js")

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
  const cityName = document.querySelector('#breweryName').value;

  const breweryArr = cityName.split(" ");

  const url = `https://api.openbrewerydb.org/breweries?by_city=${breweryArr[0]}_${breweryArr[1]}`

  let breweryNames = [];

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      const random = data[Math.floor(Math.random() * data.length)];
      console.log("data:" + random);

      // dataContainer.push(data);
      breweryNames = data.map(el => el.name);
      console.log(breweryNames);
      breweryTypes = data.map(el => el.brewery_type);
      console.log(breweryTypes);
      breweryLocations = data.map(el => el.street);
      console.log(breweryLocations);

      breweryNames.forEach((element, index, array) => {
        const brewery = new BreweryInfo(breweryNames[index]);
        brewery.testCall(breweryNames[index]);
        brewery.listBreweries();
      })


    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  
  
  
    class BreweryInfo {
    constructor(breweryData) {
      this.name = breweryData.name;
      this.type = breweryData.brewery_type;
      this.street = breweryData.street;
    }
    
    testCall(){
      console.log("name of brewery: " + breweryNames.name);
    }

    listBreweries() {
      let tableRef = document.getElementById('brewery-table');


      let newRow = tableRef.insertRow(-1);
      let newNCell = newRow.insertCell(0);
      let newBTCell = newRow.insertCell(1);
      let newSCell = newRow.insertCell(2);

      
      
      let newNText = document.createTextNode(`${this.name}`);
      
      console.log("newNText should be: " + this.name);

      let newBTText = document.createTextNode(`${this.type}`);
      
      let newSTtext = document.createTextNode(`${this.street}`);

      // newNCell.appendChild(newNText);
      // newBTCell.appendChild(newBTText);
      // newSCell.appendChild(newSTtext);  
      
      // breweryNames.forEach((element, index, array) => {
      //   console.log("reached the for each")
      //   newNCell.appendChild(newNText);
      // })
      
      
      // // Create a foreach to cycle through the array of objects
      for (let arr of breweryNames) {
        newNCell.appendChild(newNText);
      //   newBTCell.appendChild(newBTText);
      //   newSCell.appendChild(newSTtext);
      }

      for (let arr of breweryTypes) {
        newBTCell.appendChild(newBTText);
      }

      for (let arr of breweryLocations) {
        newSCell.appendChild(newSTtext);
      }
    }
  }
}
