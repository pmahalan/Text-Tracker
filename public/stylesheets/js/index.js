$(document).ready(function () {
  $('select').formSelect();

  // ***********************************
  //        STARTS A NEW SEARCH
  // ***********************************

  // When newSearch (submit) button is pressed
  $("#newSearch").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();

    // Collects data from form, getting references to our form and input

    //Collects the value of the form's search parameter
    let optionValue = $("#searchParam").val();

    // // Throws error if no search parameter was chosen
    if (optionValue === "") {
      let toastHTML = '<span>You must choose a search parameter.</span>';
      return M.toast({ html: toastHTML, displayLength: 2000 });
    };
    
    
    switch(optionValue) {
      case "eventName":
        // when optionValue = this case, calls associated function
        getEventsByName();
        break;
      case "eventKeyword":
        // when optionValue = this case, calls associated function
        getEventsByKeyword();
        break;
      case "personName":
        // when optionValue = this case, calls associated function
        getPersonByName();
        break;
      case "personCell":
        // when optionValue = this case, calls associated function
        getPersonByCell();
        break;
    };
  });
  

  // ***********************************
  //        SEARCH FUNCTIONS
  // ***********************************


  // SEARCH FOR EVENT BY NAME  ========================
  

  function getEventsByName() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim();
    // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        let toastHTML = '<span>The search field cannot be empty.</span>';
        return M.toast({ html: toastHTML, displayLength: 2000 });
      };
    
      window.location.href = ("/api/events/name/" + searchText);
  };


  // SEARCH FOR EVENT BY KEYWORD  ========================
  

  function getEventsByKeyword() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim();
    // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        let toastHTML = '<span>The search field cannot be empty.</span>';
        return M.toast({ html: toastHTML, displayLength: 2000 });
      };

      window.location.href = ("/api/events/keyword/" + searchText);
  };


  // SEARCH FOR PERSON BY NAME  ========================


  function getPersonByName() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim().split(" ");
      // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        let toastHTML = '<span>The search field cannot be empty.</span>';
        return M.toast({ html: toastHTML, displayLength: 2000 });
      };

      // Throws error if searchText is more than 2 indices long.
      if (searchText.length > 2) {
        let toastHTML = '<span>Please search by first and last name only.</span>';
        return M.toast({ html: toastHTML, displayLength: 2000 });
      }

    //assigns variables to the words in searchText array
    let firstName = searchText[0];
    let lastName = searchText[1];

    window.location.href = ("/api/users/name/" + firstName + "/" + lastName);
  };


  // SEARCH FOR PERSON BY CELL ========================


  function getPersonByCell() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim();
    // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        let toastHTML = '<span>The search field cannot be empty.</span>';
        return M.toast({ html: toastHTML, displayLength: 2000 });
      };

    //Cleans search text to be numbers only
    let cleanedText = searchText.replace(/\D+/g, '');

    window.location.href = ("/api/users/cell/" + cleanedText);
  };
});