//const used to create a read-only reference to a value
//get the element by the id defined gains
const gains = document.getElementById("gains");

//console.log is used to see what getElementById 'got':
console.log(gains);

//create a function called onClick
function onClick() {
  //create an alert when the text is clicked
  alert("Gains Obtained!");
  gains.textContent = "Gains Obtained!";
}

gains.addEventListener("click", onClick);
