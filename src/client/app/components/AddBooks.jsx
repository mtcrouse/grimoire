import React from 'react';
import axios from 'axios';
import AddBook from './AddBook.jsx';
import SearchResult from './SearchResult.jsx';

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [] };

    this.addBook = this.addBook.bind(this);
    this.addSearchResults = this.addSearchResults.bind(this);
  }

  addBook(data) {
    const book = {
      title: data.title,
      author: data.author,
      subtitle: null,
      genre: 'fiction',
      publicationYear: 2000,
      language: 'English',
      originalLanguage: 'English'
    }

    axios.post('/books', book)
      .then((res) => {
        const newBooks = this.props.books.concat([res.data]);
        this.props.addBook(newBooks);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('add book from books.jsx');
  }

  addSearchResults(results) {
    console.log(results);
    this.setState( { searchResults: results });
  }

  render() {
    return (
      <div>
        <div className="twelve columns">
          <AddBook addBook={this.addBook} addSearchResults={this.addSearchResults} />
        </div>
        {this.state.searchResults.map((book,index) => {
          return <SearchResult key={index} book={book} />;
        })}
      </div>
    );
  }
}

export default AddBooks;
