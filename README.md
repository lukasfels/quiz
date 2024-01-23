# Quiz-App built with [Vue.js](https://vuejs.org/) & [Tailwind CSS](https://tailwindcss.com/)

## Local Setup

For local development, set the app up either with docker or npm.

### Using Docker

To run the app locally with **docker** and **docker-compose** run the following command:

```sh
docker-compose up
```

The app will be available at: [localhost:3000](http://localhost:3000)

### Using local npm

To run the app locally with **npm** run the following commands:

```sh
npm install
npm run dev
```

## Testing (Vitest)

To run the tests locally run:

```sh
# with docker
docker-compose exec web npm run test

# with npm
npm run test
```

## Deployment

To deploy the app to GitHub-Pages commit/merge your changes into main.
Every commit into main will trigger the automatic deployment via GitHub-Actions.
