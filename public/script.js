console.log("hello script js");

import './category-name.js';
import './note-card.js';

window.addEventListener('load', () => {
    getCol();
    getNotes();
});

//get columns
async function getCol() {
    const res = await fetch('columns');
    const json = await res.json();
    console.log(json);
    const main = document.querySelector('main');

    json.forEach(newcategory => {
        const newCol = document.createElement('category-name');
        newCol.newcategory = newcategory;
        main.appendChild(newCol);
    })
}

//get cards
async function getNotes() {
    const res = await fetch('cards');
    const json = await res.json();
    console.log(json);
    const main = document.querySelector('main');
    const cols = document.getElementsByClassName('category');

    json.forEach(newnote => {
        let categoryMain = document.getElementById(`column ${newnote.columnId}`);
        const newNote = document.createElement('note-card');
        newNote.newnote = newnote;
        categoryMain.appendChild(newNote);
    })
}