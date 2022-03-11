const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8001;

//middleware
app.use(express.json());
app.use(cors());

//db connection
mongoose.connect(MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


//api endpoints
app.get('/', (req, res) => res.status(200).send('Hello world'))

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));