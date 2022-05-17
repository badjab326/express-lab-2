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
    let tipPercentage = req.params.tipPercentage / 100;
    res.send(`${total * tipPercentage}`);
});

//MAGIC 8 BALL

const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

//2. Create a route of '/magic'that should expect a phrase in the URL that ask the Magic 8 ball a question.
//3. So if the user hits that route and asks a question he should have return to him his question AND a random Magic 8 ball response
//5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
app.get("/magic/:question", (req, res) => {
    const x = Math.floor((Math.random() * answers.length) - 1)
    res.send(`${req.params.question} <h1>${answers[x]}</h1>`);
});


app.listen(port, () => {
    console.log('Express is listening for requests from the browser on port', port);
});