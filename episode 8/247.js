const express = require('express')//important package
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Its Working! Copy this link above and navigate to uptimerobot.com'))//If you see this message above the console, you're good to go!

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
© 2021 GitHub, Inc.
Terms
