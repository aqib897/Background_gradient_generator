Background Gradient Generator

The Background Gradient Generator is a lightweight frontend project developed using HTML, CSS, and JavaScript. It enables users to generate random HEX color combinations, apply them instantly as a linear gradient background, and copy the corresponding CSS code for reuse in other web projects.

This project focuses on simplicity and usability, making it a practical tool for developers as well as a strong example of JavaScript-based DOM manipulation and dynamic styling.

Key Features

Random HEX color generation using JavaScript

Real-time background updates with CSS linear gradients

Interactive buttons displaying current color values

Automatic update of gradient CSS code

One-click copy-to-clipboard functionality

Clean, centered layout using CSS Flexbox

Technologies Used

HTML5 – Defines the structure of the application

CSS3 – Handles layout, styling, and visual presentation

JavaScript (ES6) – Manages interactivity, logic, and clipboard operations

Application Workflow

The interface displays two buttons representing the colors used in the gradient.

Clicking either button generates a new random HEX color.

The page background updates immediately using a linear-gradient(to right, color1, color2) style.

The generated CSS code is displayed for reference.

Clicking the code block copies the gradient CSS to the clipboard.

Example Output
background-image: linear-gradient(to right, #92d768, #c2ddc9);

Project Structure
background-gradient-generator/
├── index.html   // Application structure
├── style.css    // Layout and styling
├── script.js    // Logic and interactivity
└── README.md    // Documentation

Learning Outcomes

This project demonstrates essential frontend development concepts, including:

JavaScript event handling and function usage

Dynamic manipulation of CSS properties

Random value generation

Clipboard API integration

Responsive alignment using Flexbox

Getting Started

Clone the repository:

git clone https://github.com/your-username/background-gradient-generator.git


Open index.html in a web browser.

Interact with the buttons to generate and copy gradient styles.

License

This project is open-source and intended for educational and personal use.
