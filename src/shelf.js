
function shelfBook(book, shelf) {
  if(shelf.length < 3) {
  shelf.unshift(book);
  console.log(shelf)
  return shelf
  }
};
// function unshelfBook(book, shelf) {
//   var indexPos = shelf.indexOf(book);
//    shelf.splice(indexPos);
//    return shelf
//  };
 
function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book)
    shelf.splice(i, 1)
  }
  return shelf
};

function listTitles (shelf) {
 var titles = [];
  for (var i = 0; i < shelf.length; i++) {
  titles.push(shelf[i].title);
 }
 return titles.join(", ")
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    var shelved = false
    if(shelf[i].title === title) {
    shelved = true
    }
  }
  return shelved
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};