# AI Site Builder Playground

Welcome to the AI Site Builder Playground! This project is a static web application built using React, Vite, and Tailwind CSS. The application allows users to input prompts and generate HTML content dynamically.

## Project Structure

```
ai-site-builder
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   └── Footer.jsx
│   ├── pages
│   │   └── Home.jsx 
│   ├── styles
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Features

- **Header**: Displays the project title "lovable.dev – Prompt → Website".
- **Main Functionality**: 
  - A large centered text area for user input.
  - "Generate" button to create HTML from the input prompt.
  - "Reset" button to clear the input and output.
  - Live preview section to display the generated HTML.
  - "Code Review" section for reviewing the generated code.
- **Footer**: Placeholder for any footer content.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ai-site-builder
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.