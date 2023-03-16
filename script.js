const bookContainer = document.querySelector("#bookContainer");
const newBookBtn = document.querySelector("#newBookBtn");
const hiddenContainer = document.querySelector("#hiddenContainer");
const gridContainer = document.querySelector("#sideBarImageGrid");

function popupMenu() {
    hiddenContainer.classList.remove("opaque");
    gridContainer.classList.add("opaque");
}

let myLibrary = [
    {
        "title": "Harry Potter",
        "pages": 126,
        "author": "jk Rowling"
    },
    {
        "title": "the hobbit",
        "pages": 198,
        "author": "Tolkein"
    }
];

function Book() {

}

function addBookToLibrary() {
    for(i=0; i < myLibrary.length; i++) {
        console.table(myLibrary);
        let myLibraryData = myLibrary[i];
        let newBook = document.createElement("div");
        let titleElt = document.createElement("p");
        let pagesElt = document.createElement("p");
        let authorElt = document.createElement("p");

        //appends each element to the correct parent
        bookContainer.appendChild(newBook);
        newBook.appendChild(titleElt);
        newBook.appendChild(pagesElt);
        newBook.appendChild(authorElt);

        //add the respective class to the specified element
        newBook.classList.add("book-card")
        titleElt.classList.add("title-container");
        pagesElt.classList.add("pages-container");
        authorElt.classList.add("author-container");

        //fills the element with the object info
        titleElt.textContent = myLibraryData.title;
        pagesElt.textContent = myLibraryData.pages;
        authorElt.textContent = myLibraryData.author;
    }
}

addBookToLibrary();