//Import express
const express = require('express');
const apiRoutes = require('./routes/index.js');
const path = require('path');

const app = express();
//Create a PORT
const PORT = process.env.PORT || 3001;

//Set up middleware for parsing json
app.use(express.json());

//Set up middleware that will parse urlencoded data
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.use(express.static('public'));


// Get Route to the homepage 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Get Route for the notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
});

//Server on the PORT begins 
app.listen(PORT, () => {
console.log('Express server listening at http://localhost:${PORT}!')
});

