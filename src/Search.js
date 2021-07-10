import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types';

class Search extends Component{
  state = {
    books:[],
    searchText:''
  }
  handleSearch=(searchText)=>{
   this.setState(()=>({searchText}))
   if(searchText !==''){
  BooksAPI.search(searchText,100).then((books)=>{this.setState(()=>({books}))}) 
   }
    else{this.setState(()=>({books:[]}))}
   }

render(){
  const booksOnShelves = this.props.bookOnShelves
return(
  
 <div className="search-books">
            <div className="search-books-bar">
              <Link to='./' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(e)=>this.handleSearch(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{this.state.books.length>0 && this.state.books.map(b=> <li key={b.id}>
<Book 
Book={b} 
shelf={booksOnShelves.filter(x=>x.id===b.id).length>0?booksOnShelves.find(x=>x.id===b.id).shelf:'none'}
onChangeBookShelf={this.props.onChangeBookShelf}/> 

</li>)}

           
</ol>
            </div>
          </div>
)
}
}
Search.propTypes = {

  bookOnShelves: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  }
export default Search
//{this.state.books.map(b=> <li key={b.id}><Book Book={b}/> </li>)}
//{this.state.searchText ==='' &&  <li> </li> }