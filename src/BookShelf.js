import React, { Component } from 'react';
import BookCategory from './BookCategory';

class BookShelf extends Component {
	
	getBooks(category) {
		return this.props.books.filter(book => book.shelf === category);
	}

	render() {
		const {books, switchShelf} = this.props;
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookCategory  title = "Currently Reading"  books = {this.getBooks('currentlyReading')} switchShelf = {switchShelf}/>
						<BookCategory  title = "Want to Read" books = {this.getBooks('wantToRead')} switchShelf = {switchShelf}/>
						<BookCategory  title = "Read" books = {this.getBooks('read')} switchShelf = {switchShelf}/>
					</div>
				</div>
            </div>
            
		);
	}
	
}

export default BookShelf;