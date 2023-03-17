const bookContainer = document.querySelector("#bookContainer");
const newCharBtn = document.querySelector("#newCharBtn");
const hiddenContainer = document.querySelector("#hiddenContainer");
const gridContainer = document.querySelector("#sideBarImageGrid");
const submitBtn = document.querySelector("#submitBtn");
const nameInput = document.getElementById("name");
const tokenNumberInput = document.getElementById("tokenNumber");
const loreInput = document.getElementById("lore");
const myImage = new Image();




submitBtn.addEventListener("click", submitNewCharacter);

function Character(name, tokenNumber, lore) {
    this.name = name;
    this.tokenNumber = tokenNumber;
    this.lore = lore;
}

let myLibrary = [
    {
        "name": "Angus of Mu",
        "number": 2241,
        "lore": "yes",
        "image": "./media/2241-battle-mage-angus-of-mu-nobg.png"
    },
    {
        "name": "boop of Eidolon",
        "number": 198,
        "lore": "Has lore"
    },
    {
        "name": "boop of Eidolon",
        "number": 198,
        "lore": "yes"
    },
    {
        "name": "boop of Eidolon",
        "number": 198,
        "lore": "yes"
    },
    {
        "name": "Wazir",
        "number": 198,
        "lore": "yes"
    },
    {
        "name": "Hardwin",
        "number": 198,
        "lore": "yes"
    },
    {
        "name": "Artis",
        "number": 198,
        "lore": "yes"
    }
];



function submitNewCharacter(event) {
    let loreValue = "";
    event.preventDefault(event);
    console.log("You submitted a new character");
    if(loreInput.checked === true) {   
        loreValue = "Has lore";
    } else {
        loreValue = "No Lore";
    }
    let character = new Character(nameInput.value, tokenNumberInput.value, loreValue);
    console.log(character);
    myLibrary.push(character);
    addNewChar(character);
}

function removeChar(i) {
    myLibrary.splice(i, 1);
    console.log("You removed a character from your list");
    console.log(myLibrary);
}

function popupMenu() {
    hiddenContainer.classList.toggle("opaque");
    gridContainer.classList.toggle("opaque");
}

function renderLibrary() {
    let divsToRemove = document.querySelectorAll('.book-card, title-container, pages-container, author-container, generated-img, remove-icon');
    //removes old grid
    for (i = divsToRemove.length - 1; i >= 0; i--) {
        divsToRemove[i].remove();
    }
    
    for(i=0; i < myLibrary.length; i++) {
        // console.table(myLibrary);
        let myLibraryData = myLibrary[i];
        let removeIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 remove-icon" id="removeIcon"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  /></svg>'
        let newChar = document.createElement("div");
        let nameElt = document.createElement("p");
        let numberElt = document.createElement("p");
        let loreElt = document.createElement("button");
        let imgElt = document.createElement("img");
        
        //appends each element to the correct parent
        bookContainer.appendChild(newChar);
        newChar.innerHTML += removeIcon;
        newChar.appendChild(nameElt);
        newChar.appendChild(numberElt);
        newChar.appendChild(loreElt);
        newChar.appendChild(imgElt);

        //add the respective class to the specified element
        newChar.classList.add("book-card");
        newChar.setAttribute("id", "bookCard");
        nameElt.classList.add("title-container");
        numberElt.classList.add("pages-container");
        loreElt.classList.add("author-container");
        loreElt.setAttribute("id", "loreCheck");
        imgElt.classList.add("generated-img");

        //fills the element with the object info
        nameElt.textContent = myLibraryData.name;
        numberElt.textContent = myLibraryData.number;
        loreElt.textContent = myLibraryData.lore;
        imgElt.src = myLibraryData.image;

        
    }

    for (var i = 0; i < removeIcon.length; i++) {
        let removeIcon = document.querySelectorAll("#removeIcon");
        removeIcon[i].addEventListener('click', function(i) {
           console.log('You clicked element #' + i);
           removeChar(i);
           renderLibrary();
        }.bind(null, i));
     }

     for (var i = 0; i < loreCheck.length; i++) {
        let loreCheck = document.querySelectorAll("#loreCheck");
        loreCheck[i].addEventListener('click', function(i) {
            if(myLibraryData.lore === "Has lore") {
                loreElt.classList.add("has-lore");
            }
            loreCheck[i].classList.toggle("has-lore");
        }.bind(null, i));
     }
}

function addNewChar(character) {
    let newChar = document.createElement("div");
    let nameElt = document.createElement("p");
    let numberElt = document.createElement("p");
    let loreElt = document.createElement("button");
    let imgElt = document.createElement("img");

    bookContainer.appendChild(newChar);
    newChar.appendChild(nameElt);
    newChar.appendChild(numberElt);
    newChar.appendChild(loreElt);
    newChar.appendChild(imgElt);

    newChar.classList.add("book-card")
    nameElt.classList.add("title-container");
    numberElt.classList.add("pages-container");
    loreElt.classList.add("author-container");
    imgElt.classList.add("generated-img");

    nameElt.textContent = character.name;
    numberElt.textContent = character.tokenNumber;
    loreElt.textContent = character.lore;
    imgElt.src = character.image;
}

renderLibrary();

  
