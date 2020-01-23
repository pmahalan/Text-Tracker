$(document).ready(function () {
  $('select').formSelect();

  // When newPerson (submit) button is pressed
  $("#newSearch").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();

    // Collects data from form
    // Getting references to our form and input
    let searchValue = $("#search").val().trim();
    let optionValue = $("#searchParam").val();

    let newSearch = {
      searchFor: searchValue,
      searchIn: optionValue,
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









});