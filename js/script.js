$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();
    let formInput = $("#userInput").val();
    let stringArr = formInput.split(' ');
    stringArr.forEach(e => {
      $('#output').append('<li>'+ e +'</li>');
    });
  });
});

