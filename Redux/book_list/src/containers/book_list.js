/*
* Instead of use Component, use Container. Container is from React-Redux, which
* creates the bridge from those two libraries.
*
* >> We want the most *parent* component that cares about a
* particular piece of state to be a Container
*/


import React, { Component } from 'react';
// Container is a normal React Component,
// but it is bound to the application state
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


// Transforming BookList into a Container
function mapStateToProps(state) {
  // Whatever object is returned will show up as props
  // inside of BookList

  // When the state changes, the container will change as well
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should
  // be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Conection from Redux
// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
