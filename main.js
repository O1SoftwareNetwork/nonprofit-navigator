import { volunteer_list } from "./data.js";
import { renderHomeMarkup } from "./views/homeView.js";
import { renderListMarkup } from "./views/listView.js";


/******************************************************
 * * * * * * * * * * * * * HOME * * * * * * * * * * * *
 ******************************************************/

const renderHome = () => {
  // Target root element
  let main = document.getElementById("root");
  // Store markup in a variable
  let markup = renderHomeMarkup();
  // Insert our home markup into our root
  main.innerHTML = markup;
  // Add event listeners
  const volunteerButton = document.getElementById("volunteerHome__button");
  volunteerButton.addEventListener("click", renderVolunteerList);
};

/******************************************************
 * * * * * * * * * VOLUNTEER LIST PAGE * * * * * * * *
 ******************************************************/

const renderVolunteerList = () => {
  let main = document.getElementById("root");

  // Passing the data to our view function
  let markup = renderListMarkup(volunteer_list)

  main.innerHTML = markup;

  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", showSearchResults);

  // Grabbing a reference of the DIV containing all the cards
  const searchResults = document.getElementById("search-results");
  searchResults.addEventListener("click", renderVolunteerDetails);
};



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

/******************************************************
 * * * * * * * * VOLUNTEER DETAILS PAGE * * * * * * * *
 ******************************************************/

const renderVolunteerDetails = (e) => {
  const volCard = e.target.closest(".volunteerCard");
  const id = +volCard.dataset.id;

  const vol = volunteer_list.find((v) => v.id === id);

  let main = document.getElementById("root");
  let markup = `
    <div> 
      <img class="volunteer_list_image" src=${vol.image.url} alt=${
    vol.image.description
  }>
      <div>
        <h1>${vol.name}</h1>
        <p class="volunteerDetail_description">${vol.description}</p>
        <button class= "volunteerDetail_readMore">Read More</button>
        <h2>Cause Areas</h2>  
        <p>${vol.cause_areas.join(", ")}</p> 
        <h2>When</h2>
        <p>${vol.date_hosted}</p>
        <div class="volunteer-details__location">
          <div>
            <h2>Where</h2>
            <p>${vol.location.address}</p>
            <p>${vol.location.city}, ${vol.location.state}, ${
    vol.location.zip
  }</p>
          </div>
          <div style="width:75px;height:75px;background-color:lightgray">MAP</div> 
        </div>
        <h2>Skills</h2> 
        <ul>
          ${vol.skills.map((skill) => `<li>${skill}</li>`).join("")}
        </ul>
        <h2>Good For</h2>
        <p>${vol.good_for}<p>
        <h2>Requirements</h2>
        <ul>
          ${vol.requirements
            .map((requirement) => {
              return `<li>${requirement}</li>`;
            })
            .join("")}
        </ul>
      </div>
    </div>
  `;

  main.innerHTML = markup;
};

/******************************************************
 * * * * * * * * * * * * CORE * * * * * * * * * * * * *
 ******************************************************/

window.addEventListener("load", renderHome);

// Volunteer nav button functionality
document
  .getElementById("nav__volunteer")
  .addEventListener("click", renderVolunteerList);

// Home nav button functionality
const homeButton = document.getElementById("nav__home");
homeButton.addEventListener("click", renderHome);
