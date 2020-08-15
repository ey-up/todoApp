import React from 'react';
import {Text, View, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = (props) => (
  <TextInput
    placeholder={props.placeholder}
    placeholderTextColor="gray"
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    value={props.value}
    onChangeText={(value) => props.onChangeText(value)}
    style={[
      {
        color: 'white',
        height: height * 0.08,
        backgroundColor: 'darkblue',
        borderWidth: 0.5,
        borderRadius: 6,
        paddingLeft: 17,
        marginLeft: width / 20,
        marginRight: width / 20,
        fontSize: 17,
      },
      props.style,
    ]}
  />
);

export {Input};

