function createLibrary(libraryName) {
  var denverLibrary = {};
denverLibrary.name = libraryName;
denverLibrary.shelves = {
  fantasy: [],
  fiction: [],
  nonFiction: [],
};
return denverLibrary;
};

function addBook(library, book) {
  if (book.genre === "fantasy") {
  library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
  library.shelves.fiction.push(book);
  } else {
  library.shelves.nonFiction.push(book);
  };
  return library.shelves
};

function checkoutBook(library, title, genre) {
var stockMessage = `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      stockMessage = `You have now checked out ${title} from the ${library.name}.`
      library.shelves[genre].splice(i, 1);
    } 
  }  
  return stockMessage
};

function takeStock(library, genre) {
  var libraryStockMessage = `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`;
  var totalBookCount = 0
  for (var i = 0; i < Object.keys(library.shelves).length; i++) {
    if (genre) {
      libraryStockMessage = `There are a total of ${Object.keys(library.shelves).length} at the ${library}.`
    }
  }
  return libraryStockMessage
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};