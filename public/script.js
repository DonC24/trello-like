console.log("hello script js");

import './category-name.js';
import './note-card.js';

var noteId = null;
var colId = null;

window.addEventListener('load', () => {
    getCol();
    getNotes();
    let newcardsubmit = document.getElementById("newcardsubmit");
    newcardsubmit.addEventListener("click", createCard);
    let newcolsubmit = document.getElementById("newcolsubmit");
    newcolsubmit.addEventListener("click", createCol);

});

//get columns
async function getCol() {
    const res = await fetch('columns');
    const json = await res.json();
    console.log(json);
    colId = json[json.length-1].id + 1;
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
    // console.log("notes length: "+ json.length);
    noteId = json[json.length-1].id + 1;;

    json.forEach(newnote => {
        let categoryMain = document.getElementById(`column ${newnote.columnId}`);
        const newNote = document.createElement('note-card');
        newNote.newnote = newnote;
        categoryMain.appendChild(newNote);
    })
}

// show/hide create column form
document.getElementById("addcatbtn").addEventListener("click", function(){
    var x = document.getElementById("newcat");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});

// populate 'columns' option when creating a card
let optionsselect = function() {
    let dropdown = document.getElementById('selectcols');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Select Category';
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = '/columns';

    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.warn('Looks like there was a problem. Status Code: ' +
                      response.status);
                    return;
                }

                response.json().then(function(data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].title;
                        option.value = data[i].id;
                        dropdown.add(option);
                    }
                });
            }
        )
        .catch(function(err) {
            console.error('Fetch Error -', err);
        });
}

// show/hide create card form
document.getElementById("addnotebtn").addEventListener("click", function(){
    optionsselect();
    var x = document.getElementById("newnote");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});

// create a new card
let createCard = function() {
    let id = noteId;
    let title = document.getElementById('cardtitle').value
    let description = document.getElementById('carddesc').value
    let columnId = parseInt(document.getElementById('selectcols').value)

    fetch('/cards', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify({
            id: id,
            title: title,
            description: description,
            columnId: columnId
        }),
    })
        .then(response => response.json())
        // .then(data => console.log(data))
}

//create a new column
let createCol = function() {
    let id = colId;
    let title = document.getElementById('coltitle').value


    fetch('/columns', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify({
            id: id,
            title: title
        }),
    })
        .then(response => response.json())
        // .then(data => console.log(data))
}