// const Component = React.Component
import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />;
// };

// ES6 Class-based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    // return <input onChange={event => console.log(event.target.value) } />;
    // return <input onChange={this.onInputChange) } />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
