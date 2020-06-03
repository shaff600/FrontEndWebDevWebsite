"use strict";

(function(){

  const myName = document.getElementById("my-name");
  let nameStored = localStorage.getItem('name');

  //if there is a name stored inside the local storage consol
  if(nameStored) {
    //display the last name stored in the local database
    console.log(`Name on page load: ${nameStored}`);

    myName.innerText = `again ${nameStored}`;

    console.log(`Name stored is: ${nameStored}`);

  } else {
    myName.innerText = ""; //else display a blank feild
    console.log(`No name stored`);
  }

  //if the form is submitted without any data input, display an error messae pop up box
  //check if the form is empty
  function checkEmpty() {
    //if the form is empty or no value found inside the text box
    if(userName.value === "") {
      //return an alert
      alert("This form will not be submitted without a name!");
      userName.focus();
    }
  }

  function greetUser() {
    // don't reload the page
    event.preventDefault();

    checkEmpty();

    // Gets the name the user entered
    nameStored = userName.value;
    // and displays it in "my-name":
    myName.innerText = nameStored;

    // Puts the name into localStorage:
    localStorage.setItem('name', nameStored);
    console.log(`New name stored: ${nameStored}`);
  }
  //create an event listener so once the form is submited it will greet the user by its name
  getName.addEventListener("submit", greetUser);

}());
