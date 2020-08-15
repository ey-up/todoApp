import {
  GET_LIST,
  UPDATE_LIST,
  ADD_LIST_LOCAL,
  ADD_LIST_LOCAL2,
  DELETE_LIST,
} from '../actions/types';

import AsyncStorage from '@react-native-community/async-storage';
import {State} from 'react-native-gesture-handler';

const INITIAL_STATE = {
  list: [],
  sayi: 0,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return {...state, list: action.payload, sayi: action.sayi};

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
      let sayiTut = state.sayi;
      sayiTut++;
      const obj = action.payload;
      let arr = state.list.slice();
      arr.push(obj);

      AsyncStorage.setItem(ADD_LIST_LOCAL2, JSON.stringify(sayiTut));
      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr));

      return {...state, list: arr, sayi: sayiTut};

    default:
      return state;
  }
};
