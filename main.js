// Function to show home page

// Function to show volunteer list page
function showVolunteerListPage() {
  const voluteerSearchPage = document.getElementById("volunteer_search_page");
  voluteerSearchPage.style.display = 'block';
  const voluteerSearchHome = document.getElementById("volunteer_search_home");
  voluteerSearchHome.style.display = 'none';
}
// Function to show volunteer details page 1

// Function to show volunteer details page 2

// Function to show volunteer details page 3

//Search results show functionality
volunteer_list = [
  {
    "name":"USDA-ARS",
    "location":"Florida",
    "description":"This is non-profit org which works with Agricultural analysis"
  },
  {
    "name":"NSF",
    "location":"California",
    "description":"This is non-profit org which works with Life Sciences"
  },
  {
    "name":"NSF-NCDC",
    "location":"Atlanta",
    "description":"This is non-profit org which works with Climate"
  }
]

//function to render the search results
function showSearchResults(){
  let searchResultsDiv = document.getElementById('search-results')
  let inputKeyword = document.getElementById('keyword').value;
  let html = "";
  let i = 1;
  for (let volunteer of volunteer_list) {
    if(volunteer.name.startsWith(inputKeyword)){
      html +=
        `<div>
            <h4>${volunteer.name}</h4>
            <h5>${volunteer.location}</h5>
            <p>${volunteer.description}</p>
        </div>`;
      html += `<br>`
    }
  }
  searchResultsDiv.innerHTML = html;
}


//show div function
function showDiv(divId){
  main_page_div_children = document.getElementById("main_page").children; 
  //debugger
  for(var child_div of main_page_div_children){
      child_div.style.display =  (child_div.getAttribute('id') == divId  ? 'block': 'none');
  }
}

showDiv('volunteer_search_home')
