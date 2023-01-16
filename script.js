let myLibrary = [];
const firstBook = document.querySelector("div.book:first-of-type");
const bookGroup = document.querySelector("section");
const bookForm = document.querySelector("div.book-form");

function Book(title, author, pages, read, element) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.element = element;

    Book.prototype.info = ()=>{
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    }

    // visually display in library
    const titleElement = this.element.querySelector("p:nth-child(1)")
    const authorElement = this.element.querySelector("p:nth-child(2)")
    const pagesElement = this.element.querySelector("p:nth-child(3)")
    const hasReadElement = this.element.querySelector("p:nth-child(4)")
    titleElement.textContent = this.title;
    authorElement.textContent = this.author;
    pagesElement.textContent = this.pages;
    hasReadElement.textContent = this.read ? "Read" : "Unread";
    this.element.style.display = "block";
    bookGroup.append(this.element);
}


// Call when add book button is clicked
function addBookToLibrary(event) {
    event.preventDefault();
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("page-count").value;
    const isRead = document.getElementById("is-read").value;
    const element = firstBook.cloneNode(true);
    myLibrary.push(new Book(author, title, pages, isRead, element))
    toggleNewBookForm();
}

// toggle new book form
function toggleNewBookForm() {
    if (bookForm.style.display == "none") {
        bookForm.style.display = "block";
    }
    else {
        bookForm.style.display = "none"
    }
}

// Call when new book button is clicked
function openBookForm(event) {
    event.preventDefault();
    toggleNewBookForm();
}

// main code
const newBookButton = document.querySelector("button.book-add")
const addBookButton = document.querySelector("form button");
newBookButton.addEventListener("click", openBookForm, false);
addBookButton.addEventListener("click", addBookToLibrary, false);