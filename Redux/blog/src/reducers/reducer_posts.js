import _ from 'lodash';
import {FETCH_POSTS, CREATE_POST} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // create a list of objects based on a key
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }

}
