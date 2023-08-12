let myLibrary = [];

const init = () => {
    const newBookFormBtn = document.querySelector('button');
    newBookFormBtn?.addEventListener('click', () => {
        // TODO: make a popup to show as form 
        const formPopup = createFormPopup();
        document.body.appendChild(formPopup);
        
        const form = formPopup.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const title = form.querySelector('#title').value;
            const author = form.querySelector('#author').value;
            const year = form.querySelector('#year').value;
            
            addBookToLibrary(title, author, year);
            
            document.body.removeChild(formPopup);
            displayLibrary();
        });
    });
};

const createFormPopup = () => {
    const popup = document.createElement('div');
    popup.classList.add('form-popup');
    
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required><br>
        
        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required><br>
        
        <label for="year">Year:</label>
        <input type="number" id="year" name="year" required><br>
        
        <button type="submit">Add Book</button>
    `;
    
    popup.appendChild(form);
    return popup;
};

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const addBookToLibrary = (title, author, year) => {
    const newBook = new Book(title, author, year);
    myLibrary.push(newBook);
}

const displayLibrary = () => {
    const display = document.querySelector('.display');
    display.innerHTML = '';

    for (let book of myLibrary) {
        const bookDiv = document.createElement('div');
        const deleteBook = document.createElement('button');

        bookDiv.style.borderColor = 'black';
        bookDiv.style.backgroundColor = 'gray';
        bookDiv.appendChild(deleteBook);
        bookDiv.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`;
        display?.appendChild(bookDiv);
    }
}

init();
displayLibrary();
