import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

// It will add in the application state a key (book)
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
