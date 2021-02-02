
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
           
    return booksList;
  
};

const booksList = getBooksList().sort(function(a, b) {
    var nameA = new Date(a.status.completeDate)
    var nameB = new Date(b.status.completeDate)
    var nameAMilli = nameA.getTime();
    var nameBMilli = nameB.getTime();

    if (nameAMilli < nameBMilli) {
        return -1;
    }
    if (nameAMilli > nameBMilli) {
        return 1
    }
    return 0
});

  
return (

    <div>
        <h2>Bookshelf</h2>
        <p>Here's what I've been reading lately.</p>
        
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
