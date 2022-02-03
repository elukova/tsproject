import { Book } from "./book.js";
import { books } from "./book-collection.js";
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgoritm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgoritm);
    }
    else {
        return books.find(findAlgoritm);
    }
}
const recommendedBook = findSuitableBook("fantasy", 1000);
if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
}
else {
    console.log(recommendedBook[0].name);
}
