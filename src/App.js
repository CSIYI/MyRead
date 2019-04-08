import React from 'react'
import { Route, Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';
import Search from './Search';
import './App.css'

class BooksApp extends React.Component {
  
  state = {
    books : []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => this.setState({books}));
  }

  switchShelf = (updatedBook, shelf) =>{
    BooksAPI.update(updatedBook, shelf).then(()=>{
      updatedBook.shelf = shelf;
      this.setState(state =>({
        books: state.books.filter(currentBook => currentBook.id !== updatedBook.id).concat([updatedBook])
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf books={this.state.books} switchShelf={this.switchShelf} />
          
        )}
        />

        <div className = "open-search">
          <Link to="/search"> Search</Link>
        </div>

        <Route path="/search" render={({ history }) => (
              <Search books={this.state.books} switchShelf={this.switchShelf} />
            )}
        /> 
      </div>
    )
  }
}

export default BooksApp
