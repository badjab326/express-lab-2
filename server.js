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

// TAKE ONE DOWN AND PASS IT AROUND

// If there are 0 bottles left, do not show a link to "take one down"
// Add a link to start over, which directs the user back to the home page.

app.get('/0', (req, res) => {
    res.send(`
    <html>
        <body>
            <p> No more ottles of beer on the wall</p></br>
            <a href="/">Start over?</a>
        </body>
    </html>
`)
});

// When a number is given in the url (get "/:number_of_bottles"), users should see:
// The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.

app.get('/:number_of_bottles', (req, res) => {
    res.send(`
    <html>
        <body>
            <p> ${req.params.number_of_bottles} Bottles of beer on the wall</p></br>
            <a href="/${req.params.number_of_bottles - 1}">Take one down pass it around.</a>
        </body>
    </html>
`)
});

// On the home page (get "/"), users should see:
// "99 Bottles of beer on the wall"
// a link that says "take one down, pass it around"
// this should link to /98, where the number represents the number of bottles left.

app.get('/', (req, res) => {
    const bottles = 98
    res.send(`
    <html>
        <body>
            <p>99 Bottles of beer on the wall</p></br>
            <a href="/${bottles}">Take one down pass it around.</a>
        </body>
    </html>
`)
});

app.listen(port, () => {
    console.log('Express is listening for requests from the browser on port', port);
});