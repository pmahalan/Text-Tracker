$(document).ready(function () {
  // When newPerson (submit) button is pressed
  $("#newPerson").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();
    
    // Collects data from form
    // Getting references to our form and input
    let personFirst = $("#firstName").val().trim();
    let personLast = $("#lastName").val().trim();
    let personCell = $("#cell").val().trim();
    let personRole = $("#role").val().trim();
    let personEmail = $("#email").val().trim();
    let personKeyword = $("#keyword").val().trim();

    // parseInt for cell number
    
    let personData = {
      first_name: personFirst,
      last_name: personLast,
      cell: personCell,
      email: personEmail,
      role: personRole,
      keyword: personKeyword
    };

    // Stringify personData
    let createdPerson = JSON.stringify(personData);
    console.log(createdPerson);
    
    // makes Ajax post request
    function postPerson(data) {
      $.post("/api/users", data)
        .then(function (response) {
          console.log(response);
          window.location.replace("/newPerson");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax post request
    postPerson(createdPerson)
  });

  // Delete Person on click

  $("#deletePerson").on("click", function (event) {
    
    // declare id variable
    let id = $(this).data("id");

    // create ajax delete req
    function deletePerson(data) {
    $.delete("/api/posts/" + data)
      .then(function(response) {
        console.log(response)
        window.location.replace("/index");
      });
    }

    deletePerson(id);
  });
});
