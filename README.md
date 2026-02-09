# Background Gradient Generator

The **Background Gradient Generator** is a lightweight frontend project developed using **HTML, CSS, and JavaScript**. It allows users to generate random HEX color combinations, apply them instantly as a linear gradient background, and copy the corresponding CSS code for reuse in other web projects.

This project emphasizes simplicity, usability, and clean design, making it suitable for beginners as well as developers looking to practice JavaScript DOM manipulation and dynamic styling.

---

## Key Features

- Random HEX color generation using JavaScript  
- Real-time background updates with CSS linear gradients  
- Interactive buttons displaying current color values  
- Automatic update of gradient CSS code  
- One-click copy-to-clipboard functionality  
- Clean, centered layout using CSS Flexbox  

---

## Technologies Used

- **HTML5** – Application structure  
- **CSS3** – Layout, styling, and visual presentation  
- **JavaScript (ES6)** – Interactivity, logic, and clipboard handling  

---

## How It Works

1. Two buttons represent the colors used in the gradient.
2. Clicking a button generates a new random HEX color.
3. The background updates instantly using:
   `linear-gradient(to right, color1, color2)`
4. The generated CSS code is displayed on the screen.
5. Clicking the code block copies the CSS to the clipboard.

---

## Example Output

```css
background-image: linear-gradient(to right, #92d768, #c2ddc9);
```

---

## Project Structure

```
background-gradient-generator/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Learning Outcomes

This project demonstrates:
- JavaScript event handling and DOM manipulation  
- Dynamic CSS styling  
- Random HEX color generation  
- Clipboard API usage  
- Responsive layout with Flexbox  

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/aqib897/background-gradient-generator.git
   ```
2. Open `index.html` in your browser.
3. Click the buttons to generate and copy gradients.

---

## License

This project is open-source and intended for learning and personal use.
