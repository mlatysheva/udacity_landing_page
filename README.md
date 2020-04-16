# Landing Page Project

## Table of Contents

* Purpose of the Project
* Tasks of the Project
* Implementation procedures

### Purpose of the Project 
The purpose of the Project is to show some basic capabilities of javascript using some of the most widely used features.

### Tasks of the Project

There are three tasks the Project is solving:
1) to build dynamically a navigation menu with javascript tools
2) to check with section of the page is currently in view and to highlight this section 
by applying the relevant CSS properties
3) to smoothly scroll to the section that has been clicked on the navigation bar

### Implementation procedures

1) Building a dymanically generated navigation menu
In this task we build a navigation menu by creating li-elements containg relevant features from the sections attributes and 
subsequently appending them to their parent ul element.

2) Listening to a click event on the navigation bar to highlight the section shosen
In this task we listen to a click event on the navigation bar. We take the target of the click event and choose the property #hash, removing the fist element from the #hash string to get the id of the section clicked.
Then we change the CSS style of the active section, having removed any active status from other sections

3) Scrolling smothly to the section clicked on the navigation bar
In this task we listen to a click event by iterating through all anchored links on the page.
Once the anchor link is clicked, we scroll smoothly to the section chosen.

All these features are usable across all modern browsers.