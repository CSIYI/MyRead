import React, {Component} from 'react';
import { Route, Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import Book from './Book';


class Search extends Component{
	state = {
		query :'',
		availiableBooks: []
	}

	search = (query) => {
		this.setState({
			query : query
		})
		if (query) {
      		BooksAPI.search(query.trim(), 20).then(books => {
        	books.length > 0
          		? this.setState({ availiableBooks: books })
          		: this.setState({ availiableBooks: [] });
      		});
    	} else this.setState({ availiableBooks: [] });
	};

	render(){
		const { query, availiableBooks } = this.state;
		const { books, switchShelf} = this.props;
		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/"> Back to Main Page</Link>
              <div className="search-books-input-wrapper">
              
                <input type="text" placeholder="Search by title or author" onChange = {(event) => this.search(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              	{availiableBooks.length > 0 && (
              		<div>
              			<h3>Search return {availiableBooks.length} books</h3>
              			<ol className="books-grid">
              				{availiableBooks.map((book) => (
							<li key = {book.id}>
								<Book book = {book} switchShelf = {switchShelf} />
							</li>
						))}
              			</ol>
              		</div>
              		)}
              
            </div>
          </div>
		)
	}
}
export default Search;