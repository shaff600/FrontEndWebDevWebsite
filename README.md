# CTEC3905 Front End Web Development - Assignment

#### Shafyl Choudhury P16163077


### Notes
***
Week 04 Lab Work - responsive navbar
To help create the responsive navbar, I implemented the lab work from week 4. From here I used the header
to set out the nav elements and used a tags for the actual links.


https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_three_columns
As I researched into a few different website layouts, I came across a row element overlapping the banner which I
found useful to include in my site to help get the viewers’ attention of the services. To help create this, I
used a tutorial from w3schools and applied it to my own manner by creating one div row and including four columns
inside it with the content centre aligned.

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_column_cards
To make the column grid cards, I followed the lab work for CSS grid and flex box and used resources online.
These examples showed how to create div elements inside a row and how to make them responsive. As I choose to go
with creating three div elements/CSS cards inside the row, I needed to make them 33% width to fit in one row for
desktop. Then on mobile I would overlap these boxes with one another meaning I will need to change the
width of the boxes to 100%.


https://fontawesome.com/v4.7.0/get-started/
https://www.youtube.com/watch?v=e6LXQnWhsp8
As I was new to font awesome, I watched a few tutorials on YouTube on how to use them. From this I came to
know that they use external style sheets from the font awesome website, and you had to state the object
within the html code based on what icon you require. However, for the Instagram and Twitter logo, the
icons didn’t work so I carried out further research and found more resources to add an extra styles sheet to
make the icons visible. Then in the CSS I changed the style settings based on what colour and font size I wanted
them to be.


https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
I wanted to add dropdown bars to make it the text and layout look clean to separate the content in sections.
To help me do this, I used the w3schools tutorial on collapse bars and learned how the JavaScript for this functions and
the css styling behind this.


https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_contact_form
I created a basic contact form using the tutorial from w3schools and the to gain an understanding of how to use the elements. I
then played around with all the input forms and the css to gain a full understanding of what each functions are used for.


https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_grid_responsive
I used the css grid lab work and the tutorial from w3schools to help create a responsive image grid.

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
I used the slideshow tutorial from w3schools. I changed the code slightly to remove all the text and edited the css formatting.


https://github.com/front-end-materials/local-storage
I followed the lab exercise to create an local storage form using JavaScript


https://github.com/CTEC3905
To create the wiki search bar, I used to example from the module folder. However, I removed the thumbnail and language columns as
I didn't need them for this site.

https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_transform
I used this tutorial to help create css animation effects when hovering over the footer icons



Issues:
- To create the css grid layout I followed the lab exercise. However everything was been repeated and the sections of the grid all expanding.
To solve this is carried out research into what the 'grid-template-rows' function does and changed it from grid-template-rows: repeat(5, 1fr) to grid-template-rows: repeat(1, 1fr);
Therefore making sure it will only use the section once and not replicate this.

- When creating the css image grid I used w3schools tutorial. However when implementing this I had issues making it a mobile
first design layout. This is because they had used the media query max-width where as i needed to use min-width to make it
a mobile first design. Therefore through researching how each class was used in the css I changed the css class elements around.

- As i already had created a dummy contact form, it took me time to figure out how to implement the submit
JavaScript data entry form inside it. To help me understand the code more I carried out research online to see what
each functions do and understood how these can fit into my current form.

- Unfortunately, due to coronavirus symptoms from the second week of April, it meant I wasn’t able to make any commits during that period. Evidence of self-isolation note was provided to Graeme.


Future Development:
- From the concepts covered within this module I am eager to learn more about web development. During my placement year I was working more with the back-end of applications, this module helped to expose all the fundamentals of the front-end. As a result of demonstrating my work to friends, I have managed to convince them for me to make them a website! These website range from; information websites for a Garage contact hub, Make Up Artist contact me site, food blogger website.
- I am also excited to further develop JavaScript knowledge as I have come across projects that require solid knowledge of DOM manipulation. As my graduate role focuses on back-end development (Python, Java) I will be spending my summer studying the theory and creating side projects.
