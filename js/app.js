/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/
let sectionList = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const ul = document.getElementById("navbar__list");
for (let i = 0; i < sectionList.length; i++) {
    let navSectionName = sectionList[i].getAttribute("data-nav"); // store the menu item name, for example "Section 1"
    let navID = sectionList[i].getAttribute("id");  // store the id of the menu item, for example "section1"
    let liItem = document.createElement("li"); // create the new list element li
    liItem.classList.add("navbar__menu"); // add the class value to the newly created li element
    liItem.innerHTML = `<a class = "menu__link" href='#${navID}'>${navSectionName}</a>`; // populate the li element with its HTML code
    ul.appendChild(liItem); // append the newly created li element to its parent element ul
    
};

// remove the active class from the acti
function changeToActive(parameter) {
    for (let j = 0; j < sectionList.length; j++) {
        sectionList[j].classList.remove("your-active-class");
    }
    document.getElementById(parameter).classList.add("your-active-class"); 
}

document.getElementById("navbar__list").addEventListener("click", function(e) {
    changeToActive(e.target.hash.substring(1));
});




// Scroll to anchor ID using scrollTO event

  
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



