<!-- create readme file whuch expilan all the project -->

## Project Name:

movie_backend

## Description:

This project is a backend for movie app, it has the following features:

- User can add movie to his/her watchlist list
- User can remove movie from his/her watchlist list
- User can get all movies in his/her watchlist list
- User can view all movies sorted by rating
- User Can view all details of a movie

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Explain Structure](#expian-structure)

## Installation:

- Clone the repo
- Run `npm install` to install all dependencies
- Create `.env` file same as `.env.example.txt` and fill the values
- Run `npm start` to start the server

## Usage:

- Run `npm start` to start the server
- "http://localhost:5000" is the base url
- Use postman to test the endpoints
- Use the following endpoints to test the app:
  - `POST /watchlist/` to add movie to watchlist (body: {id: "tt1285016"})
  - `PUT /watchlist/` to update movie in watchlist (body: {id: "tt1285016" , isWatched:true})
  - `GET /watchlist` to get all movies in watchlist
  - `DELETE /watchlist/:id` to remove movie from watchlist repalce `:id` with movie id
  - `GET /movies` to get all movies sorted by rating
  - `GET /movies/:id` to get all details of a movie repalce `:id` with movie id

## Explain Structure:

- `app.js` is the entry point of the app
  .env.example.txt is an example of .env file
- `.env` file contains all the environment variables
- `routes` folder contains all the routes
- `controllers` folder contains all the controllers in which we handle the validation and pass request to buisness-rule
- `models` folder contains all the models
- `business-rule` folder contains all logics and database queries
- `common` folder contains all the common files like common response, common error, common validation etc
- `config` folder contains all the configuration files like database connection
- `.eslintrc.json` file contains all the eslint rules with airbnb style guide
