$(document).ready(function () {

  // When newEvent (submit) button is pressed
  $("#newEvent").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();

    // Collects data from form
    // Getting references to our form and input
    let eventName = $("#title").val().trim();
    let eventKeyword = $("#keyword").val().trim();
    let eventLocation = $("#location").val();
    let eventHost = $("#host").val().trim();

    //if needed fields are empty, this will send an error notice:
    if (eventName === "" || eventKeyword === "") {
      //Creates Toast for error messages
      let toastHTML = '<span>The name and keyword fields cannot be empty.</span>';
      return M.toast({ html: toastHTML, displayLength: 2000 });
    };

    let eventData = {
      title: eventName,
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
          // Success message
          let toastHTML = `<span><i class="material-icons">thumb_up</i> Success! </span>`;
          M.toast({ html: toastHTML, displayLength: 2000 });
        })
        .then(() => {
          //set Timeout
          setTimeout(() => {
            //reload the window
            window.location.replace("/newPerson");
          }, 800);
        })
        .catch((err) => {
          // If there's an error, handle it by throwing up an alert
          console.log(err)
          let toastHTML = `<span><i class="material-icons">error</i> ${err} </span>`;
          return M.toast({ html: toastHTML, displayLength: 2000 });
        })
    }
    // sends ajax post request
    postEvent(eventData)
  });

});
