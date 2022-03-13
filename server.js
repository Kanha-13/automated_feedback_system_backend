const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
const router = require('./routers')
const fileupload = require('express-fileupload')
dotenv.config()
const PORT = process.env.PORT || 8001;

//middleware
app.use(express.json());
app.use(cors());
app.use(fileupload());

//db connection
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to db...")
);


//api endpoints
app.get('/', (req, res) => res.status(200).send('Hello world'))
app.use(router)

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));