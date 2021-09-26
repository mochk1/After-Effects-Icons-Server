const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5000
const cors  = require('cors')
const fetch = require('node-fetch');
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var NounProject = require('the-noun-project'),
nounProject = new NounProject({
    key: process.ENV.key,
    secret: process.ENV.secret
});


app.post('/icons', async (req, res) => {
console.log(req.body.term)
   nounProject.getIconsByTerm(req.body.term, {limit: 50}, function (err, data) {
    if (!err) {
        res.json(data.icons);
    }
  }); 

 })


app.listen(port, () => console.log(`listening at http://localhost:${port}`))
