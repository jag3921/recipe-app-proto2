const express = require('express');
const app = express();
const unirest = require('unirest');
const port =  process.env.PORT || process.env.NODE_PORT || 5000;
const API_KEY = '01ca5b812aa74ef5a91015f1f7646bec';
//
app.get('/', (req, res) => {
 res.send("Hello world");
});

app.get('/getRecipes/', (req, res) => {
 //   const word = req.params.word;
    const request = unirest.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=5&apiKey=${API_KEY}`)
    .then(response => {
     //   res.json(response);
       // const getResponse = JSON.parse(response);
       // const data = getResponse['results'];

        res.send(response.body.results);
    })
    .catch(error => {
        console.log(error);
        res.json({status: "Error", message: error});
    })
});
app.listen(port, (err) => {
    if (err) {
        throw err;
    }
});