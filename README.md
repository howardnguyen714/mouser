# Mouser

Mouser is an app that serves as a guide for vacationers planning their  trip to one of the many Disney resorts. For every ride, shop, show, or  other attraction, there is a corresponding page where users can learn  more about it and contribute with their own tags and tips that can be  voted on by other users

## Technologies used

* React
* React Router
* Node.js
* Express
* MongoDB
* SCSS
* Bootstrap

## Installation Steps

* Fork mouser and mouser-api
* Install dependencies for both apps
* Add a MongoDB URI to your .env file in your mouser-api
* Seed database using seed.js in mouser-api
* Start mouser using "npm start" and mouser-api using "npm run dev"

## User Stories

### MVP

* As a user, I would like to be able to view pages of individual places in the resort.
* As a user, I would like to be able to provide suggestions in the form of “tags” or “tips” to a page.

### Stretch

* As a user, I would like to be able to “upvote” a tag or pro tip to show my agreement with its helpfulness.
* As a user, I would like to be able to search for a page
* As a user, I would like to attach images to the “gallery” of each page
* As a user, I would like to be able to upload an image to accompany my pro tip

## Screenshots
#### Homepage
![Homepage](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/Home.png)
#### Resorts Index
![Resorts Index](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/Resorts.png)
#### Parks Index
![Parks Index](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/Parks.png)
#### Page
![Page](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/Single%20Page.png)

## Wireframes
#### Homepage
![Homepage Wireframe](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/Landing.png)
#### Page
![Page Wireframe](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/Page.png)

## Entity Relationship Diagrams
![ERD](https://raw.githubusercontent.com/howardnguyen714/mouser/main/wireframes%20%26%20screenshots/ERD.png)

## Known Issues

* Sometimes, tags and tips do not display upon creation

## Planned Features

* "Gallery" sidebar for each page where users can upload their own images
* "Related" section listing everything that is in that page (i.e. Inside Disneyland, there is Main Street U.S.A., Tomorrowland, Fantasyland, etc...)
* "Upvote" feature for users to vote on tags and tips created by other users
