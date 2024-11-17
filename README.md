# Portfolio Website

This is a personal portfolio website built using React. It showcases various sections like Portfolio, Blog, Services, Resume, Testimonials, and Contact, all displayed on a single page with smooth navigation.

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes.
- **Smooth Scroll**: Sections on the Home page can be easily navigated using smooth scrolling.
- **3D Background Animation**: A fluid 3D background animation that enhances the user experience.
- **Dynamic Content**: Displays content like Portfolio, Blog, Testimonials, and more.
- **Email Contact Form**: A form that allows visitors to send messages directly through EmailJS.

## Technologies Used

- **React**: The JavaScript library for building user interfaces.
- **React Router**: Used for routing (though this project showcases all pages in one view, routes are defined).
- **Tailwind CSS**: A utility-first CSS framework used for fast styling.
- **Framer Motion**: A library to add animations to the components.
- **EmailJS**: Used for handling form submissions and sending contact messages.

## Getting Started

To get started with this project locally, follow the steps below.

### Prerequisites

You need to have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: npm comes with Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ltxstudio/onedev
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the project locally:
   ```bash
   npm start
   ```

   This will start the application and open it in your browser at `http://localhost:3000`.

## Pages

- **Home**: The landing page which displays all sections, including Portfolio, Blog, Contact, Services, and more.
- **Portfolio**: A section that showcases various projects.
- **Blog**: A section for blog posts (for future expansion).
- **Contact**: A contact form that uses EmailJS to send messages.
- **About**: A section about the person/creator.
- **Testimonials**: A section showing reviews/testimonials.
- **Resume**: A downloadable resume section.
- **Services**: A list of services offered.

## Customization

To customize the project for your own portfolio:

1. Replace content in `/src/pages` (such as `Portfolio.js`, `About.js`, `Blog.js`) with your own information.
2. Modify the **EmailJS** integration in the `Contact` form by signing up at [EmailJS](https://www.emailjs.com/), creating an account, and configuring your service and template IDs.
3. Update the **3D animation** and background by editing the code inside the `Home.js` component where the animation is handled.

## Dependencies

- `react-router-dom`: For routing within the React app.
- `framer-motion`: For smooth animations.
- `tailwindcss`: For utility-first styling.
- `@emailjs/browser`: For handling email form submissions.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) for amazing utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [React Router](https://reactrouter.com/) for routing.
- [EmailJS](https://www.emailjs.com/) for sending email messages.
