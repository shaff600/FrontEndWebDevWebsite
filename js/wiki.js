"use strict";

(function(){
  // creates a new object called xhr
  // which will handle the API call
  const xhr = new XMLHttpRequest();

  //console.log used to input variable into the system
  console.log(`Current readyState: ${xhr.readyState}`);


  //creates a new object called queryBox used to handle the wiki search query
  const queryBox = document.getElementById("wikiQuery");
  //creates a new object called searchForm used to handle search form
  const searchForm = document.getElementById("searchForm");
  //creates a new object called demoJSON used to display the search
  const demoJSON = document.getElementById("demo");

  // constructs the base for the request url
  const baseURL = "https://en.wikipedia.org/w/api.php? \
                format=json& \
                action=query& \
                generator=search& \
                gsrnamespace=0& \
                gsrlimit=10& \
                prop=info|extracts|langlinks|pageimages& \
                inprop=url& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
                gsrsearch=";


  function gatherData(data) {
    // console.log(data);
    // initialise some variables
    let theData = "";
    let langLinks = "";
    let img = "<img>";
    const languages = ["en"]; //just want the language in english as the wesbite will only be used in the UK.
    let k;
    let key;
    // loop through the result pages by pageid
    for(key in data.query.pages) {
      let tmp = data.query.pages[key];

      //if (tmp.thumbnail) {
        //img = `<img src="${tmp.thumbnail.source}" alt="${tmp.title}"> `;
      //}

      
      let title = `<strong><a href="${tmp.fullurl}">${tmp.title}</a></strong>`;
      let extract = `<span class="txt">${tmp.extract}</span>`;
      langLinks = "";
      for (k in tmp.langlinks) {
        if (languages.includes(tmp.langlinks[k].lang)) {
          langLinks += `<a href=${tmp.langlinks[k].url}>${tmp.langlinks[k].lang}</a> `;
        }
      }
      theData += `<li>${img} ${title} ${extract} <span class="langs">${langLinks}</span></li>`;
    }
    demoJSON.innerHTML = theData;
  }

  // the API call is triggered once the user submits a query
  searchForm.addEventListener("submit", function(ev){
    // complete the request url
    let wiki = baseURL + queryBox.value;
    // open a connection to the requested API url
    xhr.open("GET", wiki, true);
    // be polite to Wikipedia
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
    // send off that request
    xhr.send();
    // if the response was ok, handle the response data using the gatherData function
    xhr.onreadystatechange = function() {
      // console.log(`Current readyState: ${xhr.readyState}`);
      if (xhr.readyState === 4 && xhr.status === 200) {
        // parse the response JSON
        let response = JSON.parse(xhr.responseText);
        // deal with the parsed JSON data
        gatherData(response);
      }
    };
    // clear the search box
    queryBox.value = "";
    ev.preventDefault();
  }, false);

}());
