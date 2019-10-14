class CategoryName extends HTMLElement {

    constructor() {
        super();
    }

    /*deleteCol(event){
        console.log(event.target.value);
        const deleteId = event.target.value
        fetch('/columns/'+ deleteId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                const colDelete = document.getElementById(deleteId);
                colDete.remove()
            })
            .catch(function(error) {
                console.info("Error: " + error);
            })
    }*/

    set newcategory(newcategory){
        this.className = 'category';
        this.id = `column ${newcategory.id}`;
        this.innerHTML = `<h2>${newcategory.title}</h2><br />`;
    }
}

customElements.define('category-name', CategoryName);