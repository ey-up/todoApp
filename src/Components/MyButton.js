import React from 'react';
import { Text, TouchableOpacity,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
const MyButton = (props) => (
    <TouchableOpacity 
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{ 
            backgroundColor: 'darkblue', 
          
            height: height * 0.074,
            alignItems: 'center',
            marginTop:height/22,
            marginLeft: width / 20 ,
            marginRight: width / 20 ,
            justifyContent: 'center',
            borderRadius: 5
            }}>
            <Text style={{ 
                color: 'white', 
                fontWeight: 'bold', 
            fontSize: 17}}>{props.text}</Text>
          </TouchableOpacity>
);

export {MyButton};
