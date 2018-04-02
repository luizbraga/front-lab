import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  // Life-cicle method to render when it is mounted

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    })
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

// Consuming from state
function maptStateToProps(state) {
  return {posts: state.posts}
}

// Identical to mapFetchPostoToProps
// If u want to do some computation, create the function
export default connect(maptStateToProps, { fetchPosts })(PostsIndex);
