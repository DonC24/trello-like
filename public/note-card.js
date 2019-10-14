class NoteCard extends HTMLElement {

    constructor() {
        super();
        // this.editNote = this.editNote.bind(this);
    }

    deleteNote(event){
        console.log(event.target.parentNode.id);
        const deleteId = event.target.parentNode.id
        fetch('/cards/'+ deleteId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                const cardDelete = document.getElementById(deleteId);
                cardDelete.remove()
            })
            .catch(function(error) {
                console.info("Error: " + error);
            })
    }

    /*editNote(event){
        console.log(event.target.parentNode.id);
        const editId = event.target.parentNode.id
        fetch(`/cards/${editId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
                id: editId,
                title: title,
                description: description,
                columnId: columnId
            })
            .then(response => response.json())
            .then(data => {
            console.log(data)})
            .catch(function(error) {
                console.info("Error: " + error);
            })
        })
    }

    editNoteTog(event){
        console.log(this.parentElement);
        const editId = event.target.parentNode.id
        fetch('http://localhost:3000/cards/'+ editId)
        .then(response => response.json())
        .then((data) => {
            const cardDetail = document.getElementById(`${editId}`);
            cardDetail.id = `${data.id}`;
            cardDetail.innerHTML = `<div><form>
            Title: <input type="text" id="editTitle" name="title" value=${JSON.stringify(data.title)}><br/>
            Description: <input type="text" id="editDescription" name="description" value=${JSON.stringify(data.description)}><br/>
            <input type="hidden" id="editColumnId" name="columnId" value=${parseInt(JSON.stringify(data.columnId))}><br/>
            <button value="editnote" onclick="this.parentElement.editNote()">Update Note</button></form><div>`
            console.log(cardDetail);
        })
    }*/



    set newnote(newnote){
        // console.log("in new note");
        // console.log(this)
        this.className = 'noteCard';
        this.id = `${newnote.id}`;
        this.innerHTML = `<h3>${newnote.title}</h3><br />
        <p>${newnote.description}</p><br />
        <input type="button" value="Delete" id="deletenotebtn" onclick="this.parentElement.deleteNote(event)">

        <hr />`;
    }
}

customElements.define('note-card', NoteCard);