const express = require('express')
const app = express()
const fetch = require('node-fetch');
const cors  = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

var NounProject = require('the-noun-project'),
nounProject = new NounProject({
    key: '778a4df57947483c8969ab9efa302e7a',
    secret: '3a9a4ee255b84bee812d31516255b352'
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