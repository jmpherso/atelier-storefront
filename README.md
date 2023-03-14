# 👚 Project Atelier
## 🗏 Table of Contents
- [FEC Project Atelier](#fec-project-atelier)
  * [Project Details](#project-details)
    + [Components](#components)
      - [Overview](#overview)
      - [Related Products](#related-products)
      - [Questions](#questions)
      - [Ratings](#ratings)
    + [Built Using](#built-using)
  * [Installation](#installation)
    + [Requirements](#requirements)
    + [Instructions](#instructions)

## 🔍 Project Details
Project Atelier is the Front End Capstone project for Hackreactor. It requires the creation of React based web-app that simulates the experience and functionality of a modern shopping page.

## 🖥️ Tech Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Components
#### Overview
The overview component shows users basic product info like price and name, and allows users to browse styles, inspect product and style images, and choose sizes and amounts to add to the cart.
![overview](https://user-images.githubusercontent.com/24445744/218268059-d9c008a2-3db2-469a-a64a-6c8d7be2271b.gif)
#### Related Products
The related products and outfit component allows users to browse related components, see comparisons to currently selected components, add products to an "outfit", and displays basic product info for related products.
![related](https://user-images.githubusercontent.com/24445744/218268070-c3bf9a08-327d-4110-bb34-f46c6d19f602.gif)
#### Questions
The questions component allows users to submit answers and questions, mark questions and answers as helpful, browse images attached to answers, and filter questions via a search bar.
![questions](https://user-images.githubusercontent.com/24445744/218268066-7d7efab1-f44b-469a-b93e-dfdffbd910b6.gif)
#### Ratings
The ratings component allows users to view a products ratings, filter reviews by rating value, and sort reviews by different metrics, as well as submit a new review.
![ratings](https://user-images.githubusercontent.com/24445744/218268068-7c07ebb3-a340-4a94-92ee-389a76026065.gif)

### Built Using
- [React](https://reactjs.org/)  
- [Node](https://nodejs.dev/)  
- [Express](https://expressjs.com/)  
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)  
- [Jest](https://jestjs.io/)  

## 💾 Installation

### Requirements
Installing and running this project **requires the use of a github token**, as well as the following packages
```
node
npm
```
Further information on obtaining a github access token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### Instructions
- Clone the repository locally  
  
`git clone https://github.com/jmpherso/front-end-capstone.git`

- Install dependances  
  
`npm install`

- Create a file in the project root folder named ".env", and add the following text to it :
```
AUTHTOKEN = githubtoken
PORT = 1100
```
**Note : Replace githubtoken with your own github API access token. The port can be any port of your choosing.**
  
- Build via webpack  
  
`npm run build`

- Start server  
  
`npm run server`

- Navigate to [localhost:1100](http://localhost:1100/) in your browser

