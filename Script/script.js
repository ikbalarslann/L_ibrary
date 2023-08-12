var myLibrary = [];
var init = function () {
    var newBookFormBtn = document.querySelector('button');
    newBookFormBtn === null || newBookFormBtn === void 0 ? void 0 : newBookFormBtn.addEventListener('click', function () {
        // TODO: make a popup to show as form 
        var formPopup = createFormPopup();
        document.body.appendChild(formPopup);
        var form = formPopup.querySelector('form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var title = form.querySelector('#title').value;
            var author = form.querySelector('#author').value;
            var year = form.querySelector('#year').value;
            addBookToLibrary(title, author, year);
            document.body.removeChild(formPopup);
            displayLibrary();
        });
    });
};
var createFormPopup = function () {
    var popup = document.createElement('div');
    popup.classList.add('form-popup');
    var form = document.createElement('form');
    form.innerHTML = "\n        <label for=\"title\">Title:</label>\n        <input type=\"text\" id=\"title\" name=\"title\" required><br>\n        \n        <label for=\"author\">Author:</label>\n        <input type=\"text\" id=\"author\" name=\"author\" required><br>\n        \n        <label for=\"year\">Year:</label>\n        <input type=\"number\" id=\"year\" name=\"year\" required><br>\n        \n        <button type=\"submit\">Add Book</button>\n    ";
    popup.appendChild(form);
    return popup;
};
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
var addBookToLibrary = function (title, author, year) {
    var newBook = new Book(title, author, year);
    myLibrary.push(newBook);
};
var displayLibrary = function () {
    var display = document.querySelector('.display');
    display.innerHTML = '';
    for (var _i = 0, myLibrary_1 = myLibrary; _i < myLibrary_1.length; _i++) {
        var book = myLibrary_1[_i];
        var bookDiv = document.createElement('div');
        var deleteBook = document.createElement('button');
        bookDiv.style.borderColor = 'black';
        bookDiv.style.backgroundColor = 'gray';
        bookDiv.appendChild(deleteBook);
        bookDiv.textContent = "Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year;
        display === null || display === void 0 ? void 0 : display.appendChild(bookDiv);
    }
};
init();
displayLibrary();
