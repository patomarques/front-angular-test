const express = require('express'), path = require('path');

const app = express();

app.use(express.static(`${__dirname}/frontend-test/dist`));

app.get('/*', (req, res) => {
 res.sendFile(path.join('./frontend-test/dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
 console.log("Server Started");
});