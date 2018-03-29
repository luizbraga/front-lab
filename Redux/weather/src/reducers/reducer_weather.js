import {FETCH_WEATHER} from '../actions/index'
import {CITY_NOT_FOUND} from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // DO NOT MUTATE THE STATE
      // return state.concat([action.payload.data]); // Concat creates a new array
      return [action.payload.data, ...state]; // [city, city, city]
    case CITY_NOT_FOUND:
      return state
    default:
      return state;
  }
}
