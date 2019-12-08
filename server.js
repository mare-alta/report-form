const express = require('express');
const compression = require('compression');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(history());
app.use(compression());
app.use(express.static(path.join(__dirname, '/dist/')));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
