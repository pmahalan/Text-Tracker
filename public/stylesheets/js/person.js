$(document).ready(function () {
  // When newPerson (submit) button is pressed
  $("#newPerson").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();
    
    // Collects data from form
    // Getting references to our form and input
    let personName = $("#name").val().trim();
    let personCell = $("#cell").val().trim();
    let personRole = $("#role").val().trim();
    let personEmail = $("#email").val().trim();
    let personKeyword = $("#keyword").val().trim();

    // parseInt for cell number
    
    let personData = {
      name: personName,
      cell: personCell,
      email: personEmail,
      role: personRole,
      keyword: personKeyword
    };

    // Stringify personData
    let createdPerson = JSON.stringify(personData);

    // makes Ajax post request
    function postPerson(createdPerson) {
      $.post("https://6a7343ec-2977-44f3-8ba1-b1dcec3207fa.mock.pstmn.io", createdPerson)
        .then(function (data) {
          console.log(data);
          window.location.replace("/newPerson");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax post request
    // postPerson(createdPerson)
  });
});
