// Function to show home page

// Function to show volunteer list page
function showVolunteerListPage() {
  const voluteerSearchPage = document.getElementById("volunteer_search_page");
  voluteerSearchPage.style.display = "block";
  const voluteerSearchHome = document.getElementById("volunteer_search_home");
  voluteerSearchHome.style.display = "none";
}
// Function to show volunteer details page 1

// Function to show volunteer details page 2

// Function to show volunteer details page 3

//Search results show functionality
volunteer_list = [
  {
    name: "USDA-ARS",
    location: "Florida",
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

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", showSearchResults);

//show div function
function showDiv(divId) {
  main_page_div_children = document.getElementById("main_page").children;
  //debugger
  for (var child_div of main_page_div_children) {
    child_div.style.display =
      child_div.getAttribute("id") == divId ? "block" : "none";
  }
}

showDiv("volunteer_search_home");
