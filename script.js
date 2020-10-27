// ********** VARIABLES ********** //
const baseURL = "https://calendarific.com/api/v2/holidays?api_key=16497272d452815e82fb98ddf1016060f8aa4324&country=US&year=2021";
const section = document.querySelector('section')


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
    let pitcher = document.createElement('div');
    let name = document.createElement('h4');
    let date = document.createElement('p');
    let desc = document.createElement('p');
    let type = document.createElement('p');
    

    let current = summary.holidays[i];
    console.log('Current:', current);

    // ********** SETTING TEXT CONTENT AND ATTRIBUTES ********** //
    name.textContent = `${current.name}`;
    date.textContent = `${current.date.iso}`;
    desc.textContent = `${current.description}`;
    type.textContent = `${current.type}`;
    section.setAttribute('class', 'section');
    pitcher.setAttribute('class', 'column');
    
  
    //* ADD TO SECTION TAG *//
    section.appendChild(pitcher);
    pitcher.appendChild(name);
    pitcher.appendChild(date);
    pitcher.appendChild(desc);
    pitcher.appendChild(type);
    } 
}