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


// Create the list of sections

const sectionList = document.getElementsByTagName('section');


// Build the dynamic navigation menu

const ul = document.getElementById('navbar__list');
for (section of sectionList) {
    const navSectionName = section.getAttribute('data-nav'); // store the menu item name, for example "Section 1"
    const navID = section.getAttribute('id');  // store the id of the menu item, for example "section1"
    const liItem = document.createElement('li'); // create the new list element li
    liItem.classList.add('menu__link'); // add the class value to the newly created li element
    liItem.setAttribute('data-section', navID); // add the data attribute to be able to access the menu item later
    liItem.innerHTML = `<a href='#${navID}'>${navSectionName}</a>`; // populate the li element with its HTML code
    ul.appendChild(liItem); // append the newly created li element to its parent element ul
    
};

// Create the list of menu items

const menuItemList = document.getElementsByTagName('li'); 

//Remove the active class if it was active and set to active for the currently viewed section and respective navigation menu
//by iterating through the sectionList elements and menuItemList elements

function changeToActive(parameter) {    // parameter will be a string like 'section1', which is the id of a section and the 'data-section' attribute of a navigation item
    for (const section of sectionList) {
        section.classList.remove('your-active-class'); // first remove the active class from all sections
    }
    for (const menuItem of menuItemList) {
        menuItem.classList.remove('active'); //remove the active class from all menu items
    }        
    
    document.getElementById(parameter).classList.add('your-active-class');  // set the active class for the currently viewed section
    const menuItem = document.querySelector(`[data-section='${parameter}']`); // find the respective menu item for the section in view
    menuItem.classList.add("active"); // add the active class to the menu item
}

// Add class 'active' to the section and the navigation item when the section is near top of viewport

function makeActiveOnScroll() { 
    for (const section of sectionList) {
        const rectSection = section.getBoundingClientRect();        // get the rectangle containing the section in view
        if (rectSection.top <= 150 && rectSection.bottom >=150) {   // check if the rectangle is enough from the top and bottom of the screen to be active
            changeToActive(section.id)  // call the function passing the string like 'section1' which is the id of the active section and the 'data-section' attribute of the active navigation item
        }        
    }
}

// Make sections and menu items active on scroll

document.addEventListener("scroll", function() { 
    makeActiveOnScroll(); 
});

// Make sections and menu items active on click, the event listener is set on the parent navigation element

document.getElementById('navbar__list').addEventListener('click', function(e) {
    changeToActive(e.target.hash.substring(1)); // change the status of the section based on its id parameter
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




