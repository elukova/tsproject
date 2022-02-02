class Book {
  constructor(name, genre, pageAmount) {
    this.name = name;
    this.genre = genre;
    this.pageAmount = pageAmount;
  }
}

const books = [
  new Book("Harry Potter", "fantasy", 980),
  new Book("Lord of the Ring", "fantasy", 1001),
  new Book("How to be productive", "lifestyle", 500),
  new Book("Game of Thrones", "fantasy", 999),
];

function findSuitableBook(genre, pagesLimit) {
  return books.find((book) => {
    return book.genre === genre && book.pageAmount <= pagesLimit;
  });
}

console.log(findSuitableBook("fantasy", 1000));
