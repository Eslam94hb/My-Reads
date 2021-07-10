import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const  Shelve =(props) =>{
return(
<div className="bookshelf">
                  <h2 className="bookshelf-title">{props.shelfType}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

{props.Books.map(b=> <li key={b.id}>
<Book 
Book={b} 
shelf={b.shelf}
onChangeBookShelf={props.onChangeBookShelf}/> 
</li>)}
                      
                    </ol>
                  </div>
                </div>
)
}
Shelve.propTypes = {

  Books: PropTypes.array.isRequired,
  shelfType: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  }
export default Shelve