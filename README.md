cd client/
npm i
npm start

cd ..
npm i
npm run dev

Create a .env.js file inside of client/src
Complete and paste this (for session_secret create a random string):

module.exports = {
  client_id: '',
  client_secret: '',
  session_secret: ''
};