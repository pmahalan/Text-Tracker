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

    // Throws error if no search parameter was chosen
    if (optionValue === "") {
      return alert("You must choose a search parameter.");
    };
    
    switch(optionValue) {
      case Events:
        // code block
        getEvents();
        break;
      case People:
        // code block
        getPeople();
        break;
      default:
        // code block
    }
  });
  
  // SEARCH FOR EVENT ========================

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim().split(" ");
    // Throws error if a person tries to input more than just a first and last name
    if (searchText === "") {
      return alert("The search field cannot be empty.");
    };
    // Throws error if 

    //assigns variables to the words in searchText array
    let firstName = 

    let newSearch = {
      searchFor: searchValue,
      searchIn: optionValue
    };

    // Stringify personData
    let searchParam = JSON.stringify(newSearch);
    console.log(searchParam);

    // // makes Ajax post request
    // function postPerson(createdPerson) {
    //   $.post("https://6a7343ec-2977-44f3-8ba1-b1dcec3207fa.mock.pstmn.io", createdPerson)
    //     .then(function (data) {
    //       console.log(data);
    //       window.location.replace("/newPerson");
    //       // If there's an error, handle it by throwing up a bootstrap alert
    //     })
    // }
    // sends ajax post request
    // postPerson(createdPerson)

});