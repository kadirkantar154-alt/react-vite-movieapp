# Movie Trend Tracker
This project is a React application that tracks the most searched movies by users and displays trending films.
It is built with Vite, uses the TMDB API for movie data, and Appwrite for storing user search data.
The project is deployed on GitHub Pages using GitHub Actions.

## Disclaimer
This project was built following a **YouTube tutorial by JavaScript Mastery** and is not entirely my original work.  
Here’s the tutorial link: [JavaScript Mastery - Movie App](https://www.youtube.com/watch?v=dCLhUialKPQ)

Through this project, I learned and practiced the following:

- **Vite**: How to set up and structure projects with Vite.
- **React Basics**:
    - React states
    - Conditional rendering
    - `useEffect` hooks
- **API Integration**: How to fetch data from external APIs and extract necessary information.
- **Styling**: Using **TailwindCSS** and similar utility-first styling packages.
- **Component-Based Design**: Organizing UI into reusable components.

## Live Demo

You can check out the live version of this project hosted on GitHub Pages:

[Movie Trend Tracker Live](https://kadirkantar154-alt.github.io/react-vite-movieapp/)

## Features

- Modern frontend architecture with Vite + React.

- Fetch and display movie data using TMDB API.

- Store user search data in Appwrite Database to generate trending movies.

- Automated deployment using GitHub Actions.

- Responsive and user-friendly interface.

- Unit Tests With Cypress


## Installation
1. Clone the repo:
```bash
git clone https://github.com/kadirkantar154-alt/react-vite-movieapp.git
cd react-vite-movieapp
```
2. Install the dependencies:
```bash
npm install
```
3. Create a .env.local file and add the following environment variables:
```bash
VITE_TMDB_API_KEY=<TMDB_API_KEY>
VITE_APPWRITE_PROJECT_ID=<APPWRITE_PROJECT_ID>
VITE_APPWRITE_DATABASE_ID=<APPWRITE_DATABASE_ID>
VITE_APPWRITE_COLLECTION_ID=<APPWRITE_COLLECTION_ID>
```
4. Run the development server:
```bash
npm run dev
```

## Deployment
- The project is deployed on GitHub Pages using GitHub Actions.
- API keys and Appwrite IDs are injected into the build via GitHub Secrets.

## Usage
1. Type a movie name in the search bar and search
2. User searches are stored in the Appwrite database.
3. The Trending Movies section automatically displays the most searched movies.

## Technologies
- React + Vite
- Appwrite (Database & Documents)
- TMDB API (The Movie Database)
- Github Actions (CL/CD & Deployment)
- Unit Tests With Cypress