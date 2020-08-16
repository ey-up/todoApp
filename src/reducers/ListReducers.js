import {
  GET_LIST,
  UPDATE_LIST,
  ADD_LIST_LOCAL,
  ADD_COUNTER_LOCAL,
  DELETE_LIST,
  CHANGE_TODO,
} from '../actions/types';

import AsyncStorage from '@react-native-community/async-storage';
import {State} from 'react-native-gesture-handler';

const INITIAL_STATE = {
  list: [],
  count: 0,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, list: action.payload, count: action.key};

    case DELETE_LIST:
      let arr2 = state.list.slice();

      var pos = arr2
        .map(function (e) {
          return e.size;
        })
        .indexOf(action.payload);
      console.log(pos);
      arr2.splice(pos, 1);
      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr2));
      return {...state, list: arr2};

    case UPDATE_LIST:
      let temp = state.count;
      temp++;

      const obj = action.payload;
      let arr = state.list.slice();
      arr.push(obj);

      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr));
      AsyncStorage.setItem(ADD_COUNTER_LOCAL, JSON.stringify(temp));
      return {...state, list: arr, count: temp};

    case CHANGE_TODO:
      let arr3 = state.list.slice();
      var pos = arr3
        .map(function (e) {
          return e.size;
        })
        .indexOf(action.payload.size);

      arr3[pos] = action.payload;
      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr3));
      return {...state, list: arr3};

    default:
      return state;
  }
};
