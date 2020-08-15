import {UPDATE_LIST,GET_LIST,ADD_LIST_LOCAL,DELETE_LIST, ADD_LIST_LOCAL2} from './types';

import AsyncStorage from '@react-native-community/async-storage';

export const updateList = (payload) =>{
    
    return(dispatch) => {
        
        dispatch({type: UPDATE_LIST, payload})
     
    }
}

export const getListFromLocal =  () =>{
    
    return async (dispatch)  => {
        
        let data = await AsyncStorage.getItem(ADD_LIST_LOCAL);
        const sayi2 = await AsyncStorage.getItem(ADD_LIST_LOCAL2);
        if (data) {
            dispatch({  type: GET_LIST, payload: JSON.parse(data), sayi:sayi2 })
        }
    }
}

export const deleteItem =  (item) =>{
    
    return  (dispatch)  => {
        
        console.log("topic:"+item.topic + "tef:" + item.definition +"size: " + item.size);
        const sayi = item.size;
    
        dispatch({  type: DELETE_LIST, payload:sayi })
        
        
    }
}





