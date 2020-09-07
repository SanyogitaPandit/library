let myLibrary = [];

function Book(name, author, pages, read) {
    // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks() {
    myLibrary.forEach((book, index) => {
        createListItemForBook(book, index);
    });
}

function createListItemForBook(book, index) {
    let span = document.createElement("SPAN");
    span.innerText = book.read;
    let para = document.createElement("P");
    para.innerText = book.pages + " pages ";
    para.appendChild(span);

    by_para = document.createElement("P");
    by_para.innerText = "-by " + book.author;
    by_para.appendChild(para);

    let footer = document.createElement("FOOTER");
    footer.appendChild(by_para);
    title = document.createElement("H3");
    title.innerText = book.name;

    let div = document.createElement("DIV");
    div.classList.add("bookdiv");
    div.appendChild(title);
    div.appendChild(footer);

    let cross = document.createElement("DIV");
    cross.classList.add("cross");
    cross.addEventListener("click", removeBookfromLibrary);

    let list_item = document.createElement("LI");
    list_item.setAttribute("data-bookId", index);
    list_item.appendChild(div);
    list_item.appendChild(cross);

    document.getElementById("booklist").appendChild(list_item);
}

function removeBookfromLibrary(event) {
    let list_item = event.target.parentElement;
    myLibrary.splice(list_item.getAttribute("data-bookId"), 1);
    document.getElementById("booklist").removeChild(list_item);
}

function addBookToLibrary() {
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read");

    if (read.checked === true) {
        read.value = "Read";
    } else
        read.value = "UnRead";

    const book = new Book(name, author, pages, read.value);

    createListItemForBook(book, myLibrary.length);

    myLibrary.push(book);
}

function add_new_click() {
    let add_new_section = document.getElementById("add_new_section");
    add_new_section.classList.remove("no-disp");
    add_new_section.classList.add("add_div");
}

function onPageLoad() {
    document.getElementById("add_new").addEventListener("click", add_new_click);
    document.getElementById("submit").addEventListener("click", onSubmitBook);
    document.getElementById("cancel").addEventListener("click", toggleDlg);
    displayBooks();
}

function toggleDlg() {
    let add_new_section = document.getElementById("add_new_section");
    add_new_section.classList.remove("add_div");
    add_new_section.classList.add("no-disp");
}

function onSubmitBook() {
    toggleDlg();
    addBookToLibrary();
}