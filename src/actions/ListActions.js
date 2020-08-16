import {UPDATE_LIST,GET_LIST,ADD_LIST_LOCAL,DELETE_LIST,ADD_COUNTER_LOCAL,CHANGE_TODO} from './types';

import AsyncStorage from '@react-native-community/async-storage';

export const updateList = (payload) =>{
    
    return(dispatch) => {
        dispatch({type: UPDATE_LIST, payload})
     
    }
}

export const getListFromLocal =  () =>{
    
    return async (dispatch)  => {
        
        let data = await AsyncStorage.getItem(ADD_LIST_LOCAL);
        const sayi = await AsyncStorage.getItem(ADD_COUNTER_LOCAL);
        if (data) {
            dispatch({  type: GET_LIST, payload: JSON.parse(data), key:sayi })
        }
    }
}

export const deleteItem =  (item) =>{
    
    return  (dispatch)  => {
        
        const sayi = item.size;
    
        dispatch({  type: DELETE_LIST, payload:sayi })
        
        
    }
}

export const changeItem =  (item) =>{
    
    return  (dispatch)  => {
        
        dispatch({  type: CHANGE_TODO, payload:item })
    }
}






