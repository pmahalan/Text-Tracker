$(document).ready(function () {
  // initializes datepicker for New Event Form
  $('.datepicker').datepicker();

  // When newEvent (submit) button is pressed
  $("#newEvent").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();
    
    // Collects data from form
    // Getting references to our form and input
    let eventName = $("#title").val().trim();
    let eventDate = $("#date").val().trim();
    let eventLocation = $("#location").val();
    let eventHost = $("#host").val().trim();
    // let eventKeyword = $("#keyword");
    
    let eventData = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      host: eventHost
      // keyword: eventKeyword.val().trim(),
    };

    // Stringify eventData
    let createdEvent = JSON.stringify(eventData);

    // makes Ajax post request
    function postEvent(createdEvent) {
      $.post("https://6a7343ec-2977-44f3-8ba1-b1dcec3207fa.mock.pstmn.io", createdEvent)
        .then(function (data) {
          console.log(data);
          window.location.replace("/newEvent");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax post request
    // postEvent(eventData)
  });
});
