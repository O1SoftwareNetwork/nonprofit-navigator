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


//show div function
function showDiv(divId){
  main_page_div_children = document.getElementById("main_page").children; 
  //debugger
  for(var child_div of main_page_div_children){
      child_div.style.display =  (child_div.getAttribute('id') == divId  ? 'block': 'none');
  }
}

showDiv('volunteer_search_home')