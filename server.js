const express = require('express');
// Added the following line to bring in the dependency
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

// handles the route for our AJAX request to GitHub
// proxyGitHub is a callback
app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing a GitHub request for ', request.params[0]); //.params[0] contains whatever the * represents in the route
  (requestProxy({  //this is an IIFE, otherwise it will NOT run
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
// function proxyGitHub(request, reponse) {
//   console.log('Routing a GitHub request for ', request.params[0]);
//   (requestProxy({
//     url: `https://api.github.com/${request.params[0]}`,
//     headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
//   }))(request, response);
// }

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
