class NoteCard extends HTMLElement {

    set newnote(newnote){
        this.className = 'note';
        this.id = `note ${newnote.id}`;
        this.innerHTML = `<h2>${newnote.title}</h2><br />
        <p>${newnote.description}</p>`;
    }
}

customElements.define('note-card', NoteCard);