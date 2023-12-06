
//Search results show functionality
volunteer_list = [
  {
    id: 0,
    name: "USDA-ARS",
    location: {
      address: "Address",
      city: "city",
      state: "state",
      zip: "06060"
    },
    description:
      "This is non-profit org which works with Agricultural analysis",
  },
  {
    name: "NSF",
    location: "California",
    description: "This is non-profit org which works with Life Sciences",
  },
  {
    name: "NSF-NCDC",
    location: "Atlanta",
    description: "This is non-profit org which works with Climate",
  },
];

//function to render the search results
function showSearchResults() {
  let searchResultsDiv = document.getElementById("search-results");
  let inputKeyword = document.getElementById("keyword").value;

  for (let volunteer of volunteer_list) {
    if (volunteer.name.startsWith(inputKeyword)) {
      let card = buildVolunteerCard(volunteer);
      searchResultsDiv.appendChild(card);
      searchResultsDiv.appendChild(document.createElement("br"));
    }
  }
}

function buildVolunteerCard(volunteer) {
  let volunteer_card = document.createElement("div");
  volunteer_card.classList.add("volunteerCard");

  let image = document.createElement("div");
  image.classList.add("volunteerCard__image");

  let content = document.createElement("div");
  content.classList.add("volunteerCard__content");

  let name = document.createElement("h4");
  name.classList.add("volunteerCard__name");
  name.innerText = volunteer.name;

  let location = document.createElement("h5");
  location.classList.add("volunteerCard__location");
  location.innerHTML = volunteer.location;

  let description = document.createElement("div");
  description.classList.add("volunteerCard__description");
  description.innerHTML = volunteer.description;

  volunteer_card.appendChild(image);
  content.appendChild(name);
  content.appendChild(location);
  content.appendChild(description);
  volunteer_card.appendChild(content);

  return volunteer_card;
}

let markup = `
  <h1>Header of Volunteer Opportunity</h1>
  <h2>Organization Name: Aging and Disability</h2>
  <p>This is a paragraph entered by the NPO abouta brief overview of the volunteer opportunity. This should be just enough information for the volunteeer to understand the jist of the opportunity</p>
  <h3>Cause Areas</h3>
  <p>Advocacy and Human Rights, Community, Immigrants and Refugees<p>
  <h3>When</h3>
  <p>We'll work with your schedule</p>
  <P>Where<p/>
  <div>
    <div>
      <h3></h3>
      <p></p>
    </div>
    <div>image</div>
  </div>
  <h3>Skills</h3>
  <ul>
    <li>Mentoring</li>
    <li>Life Coaching</li>
    <li>Veteran Care</li>
    <li>Arabic</li>
    <li>People Skills</li>
    <li>Social Work</li>
  </ul>
  <h3>Good For</h3>
  <p><p>
  <h3>Requirements</h3>
  <ul>
    <li>Driver's License</li>
    <li>Background Check</li>
    <li>Must be at least 18</li>
    <li>Orientation or Training</li>
    <li>Very flexible, any support is appreciated</li>
    <li>A successful volunteer must be bilingual.</li>
  </ul>
`;

const renderHome = () => {
  let main = document.getElementById("root");
  let markup = `
    <div id="volunteer_search_home">
      <h2>Volunteer</h2>
    </div>
  `;
  // Insert our home page into our main container
  main.innerHTML = markup;
  
  const volunteerButton = document.getElementById("volunteer_search_home");
  volunteerButton.addEventListener("click", renderVolunteerList);
}

const renderVolunteerList = () => {
  let main = document.getElementById("root");
  let markup = `
    <div id="volunteer_search_page">
      <h2>Volunteer</h2>
      <div id="search">
        <div id="search_input">
        <input id="keyword" class="text_input" type="text"/>
        <input id="location" class="text_input" type="text"/>
      </div>
        <button id="search-button" style = "float: right">search</button>
      </div>
      <br>
      <div id="search-results">
        ${volunteer_list.map((volunteer) => renderCard(volunteer)).join('')}
      </div>
    </div>
  `;
  
  main.innerHTML = markup;
  
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", showSearchResults);
}

const renderCard = (vol) => {
  return `
    <div class="volunteerCard">
      <div class="volunteerCard__image"></div>
      <div class="volunteerCard__content">
        <h4 class="volunteerCard__name">${vol.name}</h4>
        <h5 class="volunteerCard__location">${vol.location}</h5>
        <div class="volunteerCard__description">${vol.description}</div>
      </div> 
    </div>
`;
}

const renderVolunteerDetails = (id) => {
  let main = document.getElementById("root");
  let markup = `
    <div id="volunteer_search_details_page_1"></div>
  `;
  main.innerHTML = markup;
}

// showDiv("volunteer_search_home");
window.addEventListener("load", renderHome);

// Volunteer nav button functionality
document.getElementById('nav__volunteer').addEventListener("click", renderVolunteerList);

// Home nav button functionality
const homeButton = document.getElementById("nav__home");
homeButton.addEventListener("click", renderHome);




















// //show div function
// function showDiv(divId) {
//   let main_page_div_children = document.getElementById("main_page").children;
//   //debugger
//   for (var child_div of main_page_div_children) {
//     child_div.style.display =
//       child_div.getAttribute("id") == divId ? "block" : "none";
//   }
// }