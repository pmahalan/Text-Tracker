

let cellNumber = localStorage.getItem("cell")

$.get("/api/users/cell/" + cellNumber) 
.then(function (response) {
  console.log(response);
  // If there's an error, handle it by throwing up an alert
})