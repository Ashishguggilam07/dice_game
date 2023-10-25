

const library = [
    { 
title: "The Great Gatsby", 
author: "F. Scott Fitzgerald", 
year: 1925,
   pages: 180 
},
    {
title: "To Kill a Mockingbird",
author: "Harper Lee", 
year: 1960, 
pages: 281
},
    {
title: "1984", 
author: "George Orwell", 
year: 1949, 
pages: 328 
},
    {
title: "Pride and Prejudice", 
author: "Jane Austen", 
year: 1813,
pages: 432 
} ]

//3 rd
let res3=library.reduce( (acc,prev)=>{
    return acc+prev.pages;
},0)
console.log(res3);

//4 th
let res4=library.map(elem=> elem.title)
console.log(res4)

//5th
function getBooksPublishedAfterYear(year) {
    // filter to get books published after the given year
    const filteredBooks = library.filter(book => book.year > year);
  
    // map to extract the titles of the filtered books
    const titles = filteredBooks.map(book => book.title);
  
    return titles;
  }
  
  
  const year = 1950; 
  const booksAfterYear = getBooksPublishedAfterYear(year);
  console.log(booksAfterYear);
