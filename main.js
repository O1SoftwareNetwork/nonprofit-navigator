// Function to show home page

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

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", showSearchResults);

//show div function
function showDiv(divId) {
  let main_page_div_children = document.getElementById("main_page").children;
  //debugger
  for (var child_div of main_page_div_children) {
    child_div.style.display =
      child_div.getAttribute("id") == divId ? "block" : "none";
  }
}

const renderHome = () => {
  let main = document.getElementById("main_page");
  let markup = `
    <div id="volunteer_search_home">
      <h2>Volunteer</h2>
    </div>
  `;
  // Insert our home page into our main container
  main.innerHTML = markup;
}

// showDiv("volunteer_search_home");
window.addEventListener("load", renderHome);