$(document).ready(function () {

  // When newEvent (submit) button is pressed
  $("#newEvent").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();
    
    // Collects data from form
    // Getting references to our form and input
    let eventName = $("#title").val().trim();
    let eventKeyword= $("#keyword").val().trim();
    let eventLocation = $("#location").val();
    let eventHost = $("#host").val().trim();
    
    let eventData = {
      name: eventName,
      location: eventLocation,
      host: eventHost,
      keyword: eventKeyword
    };

    // Stringify eventData
    let createdEvent = JSON.stringify(eventData);

    console.log(createdEvent)

    // creates Ajax post request
    function postEvent(data) {
      $.post("/api/newEvent", data)
        .then(function (response) {
          console.log(response);
          window.location.replace("/newEvent");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax post request
    postEvent(createdEvent)
  });
  
});
