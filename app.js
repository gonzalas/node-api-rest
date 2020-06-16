const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const PORT = 3000;

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to this API Rest!');
});

//CONNECTING THE DATABASE
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to database!');
    }
);

//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});