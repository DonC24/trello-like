class NoteCard extends HTMLElement {

    constructor() {
        super();
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

    set newnote(newnote){
        this.className = 'note';
        this.id = `${newnote.id}`;
        this.innerHTML = `<h3>${newnote.title}</h3><br />
        <p>${newnote.description}</p><br />
        <input type="button" value="Delete" id="deletenotebtn" onclick="this.parentElement.deleteNote(event)">`;
    }
}

customElements.define('note-card', NoteCard);