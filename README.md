# FFXIV Job Selector

This is a web page that allows users to generate random FFXIV jobs based on their role. It's specifically designed for people like me who can't decide what to play and love all the jobs. 

## How to Use

Simply click on the corresponding button for your preferred role - Tank, Healer, or DPS. The results will then be displayed on the right side of the buttons.

## Code Information

The code is structured as follows:

```
- index.html
- index.js
- style.css
```

The `index.html` file contains the basic structure of the web page, while `index.js` contains the JavaScript logic that updates the list based on the user's selection. The `style.css` file contains the styling for the web page.

## HTML Structure

The `index.html` file follows the usual structure, with the `head` containing a reference to the stylesheet as well as the title, and the `body` containing the main content of the page.

In the `body`, there is a `h1` element as the main heading, followed by a container `div` that holds the buttons and the results. The buttons are contained within a `div` and each of them has a unique `id`. 

The results are displayed in an unordered list (`ul`) with a class of `list`. Each list item (`li`) is then given a class that corresponds to the role of the job being displayed. 

## JavaScript Logic

The `index.js` file contains a function that listens for a click event on each of the buttons. When a button is clicked, the `result` section is updated with a list of jobs corresponding to the button pressed.

## TODO

More features will be added later on as I find more time to expand this small, stupid but fun project:,)