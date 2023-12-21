import { volunteer_list } from "./data.js";
import { renderHomeMarkup } from "./views/homeView.js";
import { renderListMarkup } from "./views/listView.js";
import { renderDetailsMarkup } from "./views/detailsView.js";

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
  const volCard = e.target.closest(".volunteerCard"); // controller
  const id = +volCard.dataset.id;

  const vol = volunteer_list.find((v) => v.id === id);

  let main = document.getElementById("root");

  let markup = renderDetailsMarkup(vol);

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
