import React, { Component } from 'react';
import Book from './Book';

class BookCategory extends Component{
	render(){
		const { title,books, switchShelf} = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li key = {book.id}>
								<Book book = {book} switchShelf = {switchShelf} />
							</li>
						))}
					</ol>
				</div>
            </div>
		);
	}
}

export default BookCategory;