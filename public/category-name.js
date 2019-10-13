class CategoryName extends HTMLElement {

    set newcategory(newcategory){
        this.className = 'category';
        this.id = `column ${newcategory.id}`;
        this.innerHTML = `<h2>${newcategory.title}</h2>`;
    }
}

customElements.define('category-name', CategoryName);