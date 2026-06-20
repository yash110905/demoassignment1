# Copilot Instructions

## Objective
Create a personal portfolio website using Express and Handlebars. The site should include the following pages:
- Home
- About Me
- Projects
- Contact Me

## Requirements
- Use Express with the Handlebars engine (`hbs`) and Express Generator-style project structure.
- All views must be inside the `views` folder.
- Use a single router file: `routes/index.js`.
- Use a shared `layout.hbs` for the overall site structure (header/footer, CSS links).
- Include GitHub and LinkedIn links in the footer.
- Provide a clean, responsive design with a consistent color palette.

## Project structure
- `app.js` for Express setup
- `bin/www` to start the server
- `routes/index.js` for routes
- `views/layout.hbs` for layout
- `views/*.hbs` for pages
- `public/stylesheets/style.css` for styling

## Personalization
Use a dark blue and white theme. Include a professional tone, clear headings, and simple layout.

## Notes
Keep the site lightweight and accessible. Use semantic markup and readable navigation. No external dependencies beyond `express` and `hbs`.
