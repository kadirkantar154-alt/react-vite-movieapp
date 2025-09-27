# Movie Trend Tracker
This project is a React application that tracks the most searched movies by users and displays trending films.
It is built with Vite, uses the TMDB API for movie data, and Appwrite for storing user search data.
The project is deployed on GitHub Pages using GitHub Actions.

## Features

- Modern frontend architecture with Vite + React.

- Fetch and display movie data using TMDB API.

- Store user search data in Appwrite Database to generate trending movies.

- Automated deployment using GitHub Actions.

- Responsive and user-friendly interface.


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