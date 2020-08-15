import {Input, MyButton} from '../Components';
import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const ChangePage = (props) => {
  const [topic, setTopic] = useState();
  const [definition, setDef] = useState();

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <Input
        placeholder='Topic'
        style={{marginTop: 50}}
        value={topic}
        onChangeText = {(value) => setTopic(value)}
       
      />
      <Input
        placeholder='Definition'
        style={{marginTop: 10}}
        value={definition}
        onChangeText={(value) => setDef(value)}
        
      />

      <MyButton
        text={'Add your comment'}
        onPress={() => {
          
          props.navigation.navigate('List',{isim:topic,yorum:definition});
        }}
      />
    </View>
  );
};

export default ChangePage;
