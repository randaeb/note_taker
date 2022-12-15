const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('..helpers/fsUtils');
const unid = require('../helpers/unid');

//Get Route for retrieving all the notes 
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route for new notes 
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNotes = {
            title,
            text,
            id: unid(),
        };

        readAndAppend(newNotes, './db/tips.json');
        res.json('Note added successfully');
    } else {
        res.error('Error adding note');
    }
});

module.exports = notes;