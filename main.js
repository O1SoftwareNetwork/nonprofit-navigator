let volunteer_list = [ 
  {
    id: 0,
    name: "Suicide Hotline",
    image: {
      url: "https://www.arkansashouse.org/storage/15950/2022_Suicide-Crisis-Lifeline%20copy.jpg", 
      description: "Picture of the 988 Hotline"
    },
    location: {
      address: "123 Main Street",
      city: "Rocky Hill",
      state: "CT",
      zip: "06067"
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Mental Health", "Crisis Hotline"],
    mission: "Our mission is to ...", 
    description:
      "This nonprofit trains members of the community to pick up calls and talk to people.",
    cause_areas: ["Advocacy", "Community"],
    skills: ["Communication", "People Skills", "Social Work"],
    good_for: "Group",
    requirements: ["Driver's License", "Background Check", "Must be at least 18", "Training", "Very Flexible, any support is appreciated"]
  },
  {
    id: 1,
    name: "Own My Puppy",
    image:  {
      url: "https://variety.com/wp-content/uploads/2014/01/puppy_bowl_lineup.jpg?w=1000",
      description: "Pictures of pups"
    },
    location: {
      address: "456 Main Street",
      city: "Reston",
      state: "Virginia",
      zip: "20190"
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Pet companion", "Lonely souls", "Animal Rescue"],
    mission: "Our mission is to ...", 
    description: 
       "This is non-profit org which works with Pet experts",
    cause_areas: ["Advocacy", "Community"],
    skills: ["Communication", "People Skills", "Social Work"],
    good_for: "Group",
    requirements: ["Requirement 1", "Requirement 2"]
  },
  {
    id: 2,
    name: "NSF-NCDC",
    image: {
      url: "https://beforetheirtime.org/cdn/shop/articles/what-is-a-nonprofit-organization_1600x.jpg?v=1650520340",
      description: "Generic Nonprofit Image"
    },
    location: {
      address: "100 Abby Lane",
      city: "Syosset",
      state: "NY",
      zip: "11797",
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Pet companion", "Lonely souls", "Animal Rescue"],
    mission: "Our mission is to ...", 
    description:
        "This is non-profit org which works with Climate",
    cause_areas: ["Advocacy", "Community"],
    skills: ["Communication", "People Skills", "Social Work"],
    good_for:["Group"],
    requirements:["Requirement 1", "Requirement 2"],
  },
  {
    id: 3,
    name: "Forver Paws Animal Shelter",
    image: {
      url: "https://www.raisely.com/blog/content/images/2023/01/Asset-1-1.png",
      description: "Generic Nonprofit Image"
    },
    location: {
      address: "123 Main Street",
      city: "Fall River",
      state: "MA",
      zip: "02121"
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Animal Rescue", "Pet Adoption"],
    mission: "Our mission is to ...", 
    description:
      "This nonprofit gives animals a second chance at finding a furever home.",
    cause_areas: ["Advocacy", "Community"],
    skills: ["Communication", "People Skills", "Social Work"],
    good_for: "Group",
    requirements: ["Requirement 1", "Requirement 2"]
  },
  {
    id: 4,
    name: "Gift of Bread",
    image: {
      url: "https://www.glenroybakery.com.au//wp-content/uploads/2023/01/Wholesale-Bread-Glenroy-Bakery.jpg", 
      description: "Picture of different types of bread"
    },
    location: {
      address: "79 George Street",
      city: "Sydney",
      state: "NSW",
      zip: "2001"
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Sharing bread", "Reduce food waste"],
    mission: "Committed to building strong, inclusive communities while also minimizing waste and promoting sustainability", 
    description:
      "Gift of Bread is an Australian food rescue charitable organisation",
    cause_areas: ["Sustainability", "Feeding vulnerable people"],
    skills: ["Baking", "Food handling", "First aid"],
    good_for: "Group",
    requirements: ["Availability for night shifts", "Driving Licence"]
  },
  {
    id: 5,
    name: "American  Red Cross",
    image:  {
      url: "https://www.redcross.org/content/dam/redcross/donations/holiday/2023-holiday-catalog/2023-holiday-donate-form-creative/Holiday-2023-WINM-Desktop_1348x505.png.transform/1024/q70/feature/image.png",
      description: "red cross"
    },

    location: {
      address: "123 South Street",
      city: "St. Louis",
      state: "MO",
      zip: "123456"
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Donate blood", "Save lives"],
    mission: "Our mission is to ...",
    description:
      "Humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness",
    cause_areas: ["Aid", "Humanitarian"],
    skills: ["Leadership", "People Skills", "Social Work"],
    good_for: "Group",
    requirements: ["good blood", "good heart"],
  },
  {
    id: 6,
    name: "Canine Sanctuary",
    image: {
      url: "https://www.rescuedogs.co.uk/wp-content/uploads/2021/02/pebbles-thumbnail.jpg",
      description: "Picture of a lovely dog"
    },
    location: {
      address: "42-04 Crescent Ave",
      city: "Queens",
      state: "NY",
      zip: "11106"
    },
    date_created: new Date(),
    date_hosted: new Date(),
    main: ["Dog Rescue", "Dog Rehabilitiation"],
    mission: "Our mission is to reduce the instances of dog fighting rings to zero and rescue and rehabilitate dogs.", 
    description:
      "This nonprofit investigates dog fighting rings and organizes animal rescue operations. ",
    cause_areas: ["Animal Rights", "Illegal Operations", "Animal Rehabilitation Center", "Animal Sanctuary"],
    skills: ["Communication", "Pet Handling", "Social Work", "Military experience", "Law Enforcement Experience"],
    good_for: "Group",
    requirements: ["Social work experience", "Animal care experience"]
  }
];

/******************************************************
 * * * * * * * * * * * * * HOME * * * * * * * * * * * *
 ******************************************************/

const renderHome = () => {
  let main = document.getElementById("root");
  let markup = `
    <div class="page__home" id="page__home">
      <h2 class="card__title">Volunteer</h2>
    </div>
  `;
  // Insert our home page into our main container
  main.innerHTML = markup;
  
  const volunteerButton = document.getElementById("page__home");
  volunteerButton.addEventListener("click", renderVolunteerList);
}

/******************************************************
 * * * * * * * * * VOLUNTEER LIST PAGE * * * * * * * * 
 ******************************************************/

const renderVolunteerList = () => {
  let main = document.getElementById("root");
  let markup = `
    <div class="page__volunteer-list" id="page__volunteer-list">
      <h2 class="header">Volunteer</h2>
      <div id="search">
        <div class="search_input" id="search_input">
        <input id="keyword" class="text_input" type="text"/>
        <input id="location" class="text_input" type="text"/>
        <button id="search-button">search</button>
      </div>
      <br>
      <div id="search-results">
        ${volunteer_list.map((volunteer) => {
          return renderCard(volunteer)
        }).join('')}
      </div>
    </div>
  `;
  
  main.innerHTML = markup;
  
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", showSearchResults);

  // Grabbing a reference of the DIV containing all the cards
  const searchResults = document.getElementById("search-results");
  searchResults.addEventListener("click", renderVolunteerDetails);
}

const getSkills = (vol) => {
  let skillDiv = `<div class="volunteerCard__skills">
                    <span class="volunteerCard__skills--label">
                      Skills You'll Gain: 
                    </span>
                    ${vol.skills.join(', ')}
                  </div>`;
  return skillDiv;
};

const renderCard = (vol) => {
  return `
    <div data-id="${vol.id}" class="volunteerCard"> 
      <img class="volunteerCard__image" src="${vol.image.url}" alt="${vol.image.description}" />
      <div class="volunteerCard__content">
        <h4 class="volunteerCard__name">${vol.name}</h4>
        <h5 class="volunteerCard__location">${vol.location.city}, ${vol.location.state}</h5>
        <ul class="volunteerCard__main-focus">
          ${(vol.main.map(item => '<li class="volunteerCard__main-focus__item">' + item + '</li>')).join('')}
        </ul>
        <p class="volunteerCard__description">${vol.description}</p>
        ${getSkills(vol)}
      </div> 
    </div>
  `;
}

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
  const volCard = e.target.closest('.volunteerCard');
  const id = +volCard.dataset.id;

  const vol = volunteer_list.find((v) => v.id === id);
  
  let main = document.getElementById("root");
  let markup = `
    <div>
      <img class="volunteer_list_image" src=${vol.image.url} alt=${vol.image.description}>
      <div>
        <h1>${vol.name}</h1>
        <p>${vol.description}</p>
        <h2>Cause Areas</h2>
        <p>${vol.cause_areas.join(', ')}</p> 
        <h2>When</h2>
        <p>${vol.date_hosted}</p>
        <div class="volunteer-details__location">
          <div>
            <h2>Where</h2>
            <p>${vol.location.address}</p>
            <p>${vol.location.city}, ${vol.location.state}, ${vol.location.zip}</p>
          </div>
          <div style="width:75px;height:75px;background-color:lightgray">MAP</div> 
        </div>
        <h2>Skills</h2> 
        <ul>
          ${vol.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        <h2>Good For</h2>
        <p>${vol.good_for}<p>
        <h2>Requirements</h2>
        <ul>
          ${vol.requirements.map((requirement) => {
            return `<li>${requirement}</li>`;
          }).join('')}
        </ul>
      </div>
    </div>
  `;

  main.innerHTML = markup;
}

/******************************************************
 * * * * * * * * * * * * CORE * * * * * * * * * * * * * 
 ******************************************************/

// showDiv("volunteer_search_home");
window.addEventListener("load", renderHome);

// Volunteer nav button functionality
document.getElementById('nav__volunteer').addEventListener("click", renderVolunteerList);

// Home nav button functionality
const homeButton = document.getElementById("nav__home");
homeButton.addEventListener("click", renderHome);