# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `backend setup`

redirect to backend directory
npm install
node index

### `backend setup`

redirect to frontend directory
npm install
npm start

### `npm test`

npm test

### `functionality`

created two routes.
# `at /` 
it's showing the list of available jobs.
data used to render the availabe jobs is static.
filter applied according to job-type and cultural values.
when we check any checkbox, if that card have anyone value of job-type or cultural values matching with that selected checkbox it will be shown.
when you click on Apply job link then apply job form will open.

# `/applyjob`

please fill the required values of form.
on click of apply button, api will be called and data will be stored in database.
on success alert when sucess message will be shown.
on click of cancel page will be redirected to available job page.
