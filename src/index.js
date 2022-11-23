const express = require('express');
require('dotenv').config();
const corsConfig = require('./configs/cors');
const route = require('./routes');

// app
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(corsConfig);


// route
app.use('/api', route);
app.get('/', (req, res) => {
    res.json('Hello world 12345!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
