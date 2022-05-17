const express = require('express');
const app = express();
const port = 3000;

//GREETINGS
// 2. Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
// 3. Give the greetingroute a param /:name
// 4. When hitting the route, the page should display a message
app.get("/greeting/:name", (req, res) => {
    res.send("Hey " + req.params.name + " how's it going?");
});


//TIP CALCULATOR
//2. Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
//3. When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage.
app.get("/tip/:total/:tipPercentage", (req, res) => {
    let total = req.params.total;
    let tipPercentage = req.params.tipPercentage /100;
    res.send(`${total * tipPercentage}`);
});

app.listen(port, () => {
    console.log('Express is listening for requests from the browser on port', port);
});