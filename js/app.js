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
let sectionList = document.getElementsByTagName('section');

// Build the dynamic navigation menu

const ul = document.getElementById('navbar__list');
for (let i = 0; i < sectionList.length; i++) {
    const navSectionName = sectionList[i].getAttribute('data-nav'); // store the menu item name, for example "Section 1"
    const navID = sectionList[i].getAttribute('id');  // store the id of the menu item, for example "section1"
    const liItem = document.createElement('li'); // create the new list element li
    liItem.classList.add('navbar__menu'); // add the class value to the newly created li element
    liItem.innerHTML = `<a class = 'menu__link' href='#${navID}'>${navSectionName}</a>`; // populate the li element with its HTML code
    ul.appendChild(liItem); // append the newly created li element to its parent element ul
    
};

// Remove the active class if was active and set to active for the currently viewed section
// by iterating through the sectionList elements

function changeToActive(parameter) {
    for (let j = 0; j < sectionList.length; j++) {
        sectionList[j].classList.remove('your-active-class'); // first remove the active class from all sections
    }
    document.getElementById(parameter).classList.add('your-active-class');  // set the active class for the currently viewed section
}

// Set the event listener to a click on the navigation bar in order to change the active status of the respective section

document.getElementById('navbar__list').addEventListener('click', function(e) {
    changeToActive(e.target.hash.substring(1)); // change the status for the section based on its id parameter
});




// Scroll smoothly to a section on a link click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {   // select all ancors on the page to iterate over them
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // prevent the default action of following a link
        document.querySelector(this.getAttribute('href')).scrollIntoView({  // get the clicked section into view by scrolling to it
            behavior: 'smooth'
        });
    });
});




