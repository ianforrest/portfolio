
import React from 'react'
import { BookData } from './BookData'
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill"



const BookShelf = (props) => {
    const getBooksList = () => {
        const booksList = [];
        const books = BookData();
            books.allBooks.edges.forEach((booksEdge) => {
                booksList.push({
                    title: booksEdge.node.title,
                    author: booksEdge.node.author,
                    bookPhoto: booksEdge.node.bookPhoto,
                    background: booksEdge.node.background,
                    status: {
                        complete: booksEdge.node.status.complete,
                        completeDate: booksEdge.node.status.completeDate,
                        rating: booksEdge.node.status.rating
                    }
                });
            });
           
    return booksList.sort(function(a,b) {
        return a.status.rating - b.status.rating;
    });
  
};

const booksList= getBooksList();

return (

    <div className="book-shelf-container">
        <h2>Bookshelf</h2>
        <p>And here's what I've been reading lately.</p>
        
        <div className="columns book-shelf is-multiline is-vcentered">
            {booksList.map((book) => (
                <div className="column is-one-third" key={book.title}>
                    <div className="box">
                        <div>
                            <div className="is-centered">
                                <img 
                                    src={book.bookPhoto} 
                                    alt={book.title + "by" + book.author}
                                    className="book is-centered"/>
                            </div>
                            <div className="book-status has-text-centered">
                                <BookRating rating={book.status.rating} />
                                
                            </div>
                        
                        </div>
                    </div>
                </div>
                  
            )
            )}
        </div>
    </div>

);
}

function BookRating(props) {
   
   if (props.rating) {
      return Array.apply(null, { length: props.rating }).map((e, i) => (
        <BsStarFill key={i} />
    
      ));
   } else
   return <span className="tag is-primary" style={{backgroundColor: "#3da9fc", textTransform: "uppercase", color: "#fffffe"}}>CURRENTLY READING</span>
   ;
}


export default BookShelf;
