const express = require('express'),
      server = express(),
      resolve = require('path').resolve,
      morgan = require('morgan'),
      axios = require('axios'),
      bodyParser = require('body-parser'),
      session = require('client-sessions'),
      { client_id, client_secret, session_secret } = require('../client/src/.env');
      
server.use([
  express.static(resolve(__dirname)),
  morgan('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  session({
    cookieName: 'session',
    secret: session_secret,
    duration: 30 * 60* 1000,
    activeDuration: 5 * 60 * 1000
  })
]);

server.get('/', (req, res) => res.sendFile(resolve(__dirname, 'client', 'public', 'index.html')));

server.get('/user/signin/callback', (req, res, next) => {
  const { query } = req;
  const { code } = query;
  
  if(code){
    axios.post('https://github.com/login/oauth/access_token', { 
      code,
      client_id, 
      client_secret
    }, {
      headers: {'Accept': 'application/json'}
    })
    .then(res => res.data)
    .then(accessObj => {
      req.session.token = accessObj.access_token;
      res.redirect('http://localhost:3000/data');
    })
    .catch(next);
  } else {
    res.sendStatus(500);
  }
});

server.use('/githubapi', require('./githubapi'));

//Catch-All Error Handler
server.use((err, req, res, next) => {
  if(err) console.log(err.message);
});

server.listen(3001, console.log('listening on 3000 but this server is 3001'));