const express = require('express');
const app = express();
const port = 3000;

// 2. Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
// 3. Give the greetingroute a param /:name
app.get("/greeting/:name", (req, res) => {
    res.send("Hey " + req.params.name + " how's it going?")
})

app.listen(port, () => {
    console.log('Express is listening for requests from the browser on port', port);
});