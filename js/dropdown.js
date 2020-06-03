//define a letibale called collapse
//getElementsByClassName is used to return a collection of elements
let collapse = document.getElementsByClassName("dropdown");
let i;


for (i = 0; i < collapse.length; i++)
{
  //create an event handler for the click function
  collapse[i].addEventListener("click", function()
  {
    //when the click function has been activated
    this.classList.toggle("active");
    //diplay the dropdown content
    let content = this.nextElementSibling; //nextElementSibling property returns the element

    //if the content is displayed as a block
    if (content.style.display === "block")
    {
      //dont add any style when displaying the dropdown
      content.style.display = "none";
    }
    //if its not
    else
    {
      //return the element as a block
      content.style.display = "block";
    }
  });
}

console.log()
