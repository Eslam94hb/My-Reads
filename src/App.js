import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelve from './Shelve'
import Search from './Search'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],
  }
  
componentDidMount=()=>{
  
BooksAPI.getAll().then((books)=>{
this.setState(()=>({books}))
})
}
  
onChangeBookShelf=(book,shelf)=>{
  let _b = book;
  _b.shelf = shelf
  if(!this.state.books.find(x=>x.id===book.id)){this.setState((currentState)=>({books:[...currentState.books,_b]}))}
   else{
     const _books = this.state.books.filter(x=>x.id !==book.id)
     this.setState(()=>({books:[..._books,_b]}))
   }
   BooksAPI.update(book,shelf)
}
  render() {
      const CurrentlyReadingBooks = this.state.books.filter(x=>x.shelf==='currentlyReading')
      const WantToReadBooks = this.state.books.filter(x=>x.shelf==='wantToRead')
      const ReadBooks = this.state.books.filter(x=>x.shelf==='read')
    return (
      <div className="app">
      
   
<Route exact path='/' render={()=>(
    
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                 <Shelve shelfType='Currently Reading' Books={CurrentlyReadingBooks} onChangeBookShelf={this.onChangeBookShelf}/>
                 <Shelve shelfType='Want to Read' Books={WantToReadBooks} onChangeBookShelf={this.onChangeBookShelf}/>
                 <Shelve shelfType='Read' Books={ReadBooks} onChangeBookShelf={this.onChangeBookShelf}/>
              </div>
            </div>
         <div className="open-search">
              <Link to='./Search' >Add a book</Link>
            </div>
          </div>
    )}/>
          
     <Route  path='/Search' render={()=>(
       <Search 
       bookOnShelves={this.state.books}
       onChangeBookShelf={this.onChangeBookShelf}
/>)}/>
       
      </div>
    )
  }
}
export default BooksApp
