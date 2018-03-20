import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDUiJfC1ia_xPQNw-ywYTQOCy3BIw8AbZg';

// Create a new compnent. This component should produce some HTML

// Function-based component
// JSX
// const App = function() {
//   return <div>Hi!</div>;
// }
// ES6
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // Execute function only every 300 miliseconds
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
        <div>
          <SearchBar onSearchTermChange={ videoSearch } />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      );
  }
}

// App is a class
// <App /> is an instance of the class

// Take this component's HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
