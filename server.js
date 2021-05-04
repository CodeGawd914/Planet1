const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config();

var request = require('superagent');
var mc_api_key = process.env.REACT_APP_MAILCHIMP_API;
var list_id = process.env.REACT_APP_LIST_ID;

const app = express();

const mailchimp = new Mailchimp(mc_api_key);
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
app.post('/signup', function (req, res) {
    request
        .post('https://' + 'us20' + '.api.mailchimp.com/3.0/lists/' + list_id + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mc_api_key ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});
