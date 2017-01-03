import React from 'react';
import AwardBook from './AwardBook.jsx';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Award Year</th>
            <th>Title</th>
            <th>Author</th>
            <th>Add Book</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map((book,index) => {
            return <AwardBook key={index} book={book} />;
          })}
        </tbody>
      </table>
    );
  }

}

export default AwardsTable;
