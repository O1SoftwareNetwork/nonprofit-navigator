export const renderDetailsMarkup = (vol) => {
  return `                       
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
};
