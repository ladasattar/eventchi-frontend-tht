# EventChi Frontend Developer THT

This project is built for the EventChi Frontend Developer THT. It is a simple web application that displays a list of events and allows users to filter events by category.

The project is built using:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/).
- [Tailwind CSS](https://tailwindcss.com/)
- [Mockapi.io](https://mockapi.io/)
- [Unsplash API](https://unsplash.com/developers)
- [React Context](https://react.dev/reference/react/createContext)
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
- [React Hook Form](https://react-hook-form.com/)

## Features

- Display a list of events
- Filter events by category & date
- Create new events
- View event details

## Project Structure

The project is structured semi-atomic design as follows:

```
.
├── public
├── src
│   ├── assets
│   ├── components
|   |   ├── molecules
|   |   ├── organisms
│   ├── context
│   ├── hooks
│   ├── api
│   ├── types
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── vite-env.d.ts
├── .env
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

## Technical Decisions

- **Vite**: Vite as the build tool for this project because it is fast, easy to configure, and supports TypeScript out of the box.
- **Context API**: React Context API to manage the global state of the application. This allowed me to avoid prop drilling and make the state accessible to all components.
- **Tailwind CSS**: Tailwind CSS for styling the application, easy to style components and build responsive layouts.
- **React Hook Form**: React Hook Form for handling form validation and submission.
- **Intersection Observer**: Intersection Observer API to detect when an element is in view.
- **Mockapi.io**: Mockapi.io to create a mock API for the events data. This allowed me to fetch data from a real API and display it in the application.
- **Unsplash API**: Unsplash API to fetch images for the events. This allowed me to display images for the events and make the application more visually appealing.

## Notes

- The application is responsive and works on mobile, tablet, and desktop devices.
- The Images was provided by Unsplash API, but the images are LIMITED ONLY 10 REQUESTS PER HOUR.

## How to run the project

1. Clone the repository
2. Run `npm | yarn | bun install` to install the dependencies
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   REACT_APP_API_URL="https://66e7e17fb17821a9d9da566f.mockapi.io/api"
   REACT_APP_UNSPLASH_API_URL="https://api.unsplash.com"
   REACT_APP_UNSPLASH_SECRET="YOUR_UNSPLASH_ACCESS_KEY
   ```
   Replace `YOUR_UNSPLASH_ACCESS_KEY` with your Unsplash access key. You can get an access key by creating an account on Unsplash and creating an application.
4. Run `npm | yarn | bun run dev` to start the development server
5. Open `http://localhost:3000` or `http://localhost:5173` or the port specified in your browser to view the application
