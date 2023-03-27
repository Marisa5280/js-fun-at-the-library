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

  for (var i = 0; i < library.shelves[genre].length; i++) {
    console.log(library.shelves[genre])
    if (library.shelves[genre][i].title === title) {
      console.log(`You have now checked out ${title} from the ${library.name}.`)
      library.shelves[genre].splice(i, 1);
    } else {
      console.log(`Sorry, there are currently no copies of ${title} availible at the ${library}.`)
    }
  }  
  return 
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};