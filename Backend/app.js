const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const mainRoutes = require('./routes/mainRoutes');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/', mainRoutes);

module.exports = app;
