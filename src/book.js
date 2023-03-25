function createTitle(oldTitle) {
  var newTitle = `The ${oldTitle}`;
  return newTitle
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
  name: null,
  age: null,
  pronouns: null
  }
  character.name = name;
  character.age = age;
  character.pronouns = pronouns;
  return character
};

function saveReview(newReview, reviews) {
 if (reviews.indexOf(newReview) > -1) {
 } else {
  return reviews.push(newReview)
  }
}
 
 function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
  }

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {}
  book.title = bookTitle;
  book.mainCharacter = bookCharacter;
  book.pageCount = calculatePageCount(bookTitle);
  book.genre = genre;
  return book
}

function editBook(book) {
  book.pageCount *= .75
  return book.pageCount
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}