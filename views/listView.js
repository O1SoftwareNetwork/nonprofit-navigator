export const renderListMarkup = (volunteer_list) => {
  return `
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
            ${volunteer_list
              .map((volunteer) => {
                return renderCard(volunteer);
              })
              .join("")}
        </div>
        </div>
  `;
};

const renderCard = (vol) => {
  return `
      <div data-id="${vol.id}" class="volunteerCard"> 
        <img class="volunteerCard__image" id="volunteerCard__image" src="${
          vol.image.url
        }" alt="${vol.image.description}" />
        <div class="volunteerCard__content">
          <h4 class="volunteerCard__name">${vol.name}</h4>
          <h5 class="volunteerCard__location">${vol.location.city}, ${
    vol.location.state
  }</h5>
          <ul class="volunteerCard__main-focus">
            ${vol.main
              .map(
                (item) =>
                  '<li class="volunteerCard__main-focus__item">' +
                  item +
                  "</li>"
              )
              .join("")}
          </ul>
          <p class="volunteerCard__description">${vol.description}</p>
          ${getSkills(vol)}
        </div> 
      </div>
    `;
};

const getSkills = (vol) => {
  let skillDiv = `<div class="volunteerCard__skills">
                      <span class="volunteerCard__skills--label">
                        Skills You'll Gain: 
                      </span>
                      ${vol.skills.join(", ")}
                    </div>`;
  return skillDiv;
};
