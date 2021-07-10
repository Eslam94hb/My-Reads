import React from 'react'
import PropTypes from 'prop-types';

const  Book =(props)=>{
const thumbnail = props.Book.imageLinks?props.Book.imageLinks.thumbnail:''
return(
<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={props.shelf} onChange={(e)=>props.onChangeBookShelf(props.Book,e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{props.Book.title}</div>
                          <div className="book-authors">{props.Book.authors}</div>
                        </div>
)
}
Book.propTypes = {

  Book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  }

export default Book

