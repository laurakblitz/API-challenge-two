// ********** VARIABLES ********** //
const baseURL = "https://calendarific.com/api/v2/holidays?api_key=16497272d452815e82fb98ddf1016060f8aa4324&country=US&year=2021";
const section = document.querySelector('ul');

// ********** SEARCH BAR ********** //

//const searchBar = document.querySelector('form');
//searchBar.addEventListener('search', displayResults);

// ********** FETCH ********** //
fetch(baseURL)
.then(function (result) {   
  return result.json(); 
})
.then(function (json) {
  console.log(json)
  displayResults(json)
});


// ********** DISPLAY RESULTS ********** //
function displayResults(json) {
    while (section.firstChild) {
    section.removeChild(section.firstChild);
    }

    let summary = json.response;

   for (let i = 0; i < summary.holidays.length; i++) {
    
    //* VARIABLES *//
    //let pitcher = document.createElement('div');
    let pitcher = document.createElement('li');
    let info = document.createElement('div');
    let name = document.createElement('h5');
    let date = document.createElement('h6');
    let desc = document.createElement('p');
    let type = document.createElement('p');
    let hr = document.createElement('hr');
    let br = document.createElement('br');
    

    let current = summary.holidays[i];
    console.log('Current:', current);

    // ********** SETTING TEXT CONTENT AND ATTRIBUTES ********** //
    name.textContent = `${current.name}`;
    date.textContent = `${current.date.iso}`;
    desc.textContent = `${current.description}`;
    type.textContent = `${current.type}`;
    section.setAttribute('class', 'container');
    //pitcher.setAttribute('class', 'row mx-lg-n5');
    info.setAttribute('class', 'col py-3 px-lg-5 border bg-light');
    //name.setAttribute('class', 'btn btn-secondary btn-lg btn-block');
    pitcher.setAttribute('class', 'card');
    name.setAttribute('class', 'card-title');
    date.setAttribute('class', 'card-subtitle mb-2 text-muted');
    desc.setAttribute('class', 'card-text');
    type.setAttribute('class', 'card-text')
    
   
    //* ADD TO SECTION TAG *//
    section.appendChild(pitcher);
    pitcher.appendChild(name);
    pitcher.appendChild(br);
    pitcher.appendChild(info);
    //pitcher.appendChild(name);
    //pitcher.appendChild(date);
    //pitcher.appendChild(desc);
    //pitcher.appendChild(type);
    info.appendChild(name);
    info.appendChild(date);
    info.appendChild(desc);
    info.appendChild(type);
    section.appendChild(br);
    date.appendChild(hr);
    } 
}