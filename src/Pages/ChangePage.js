import {Input, MyButton} from '../Components';
import React, {useState} from 'react';

import {connect} from 'react-redux';
import {changeItem} from '../actions/index';

import {View, Alert, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const ChangePage = (props) => {
  const [topic, setTopic] = useState(props.route.params?.item.topic);
  const [definition, setDef] = useState(props.route.params?.item.definition);

  return (
    <SafeAreaView style={{flex: 1}}>
   
        <View
          style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
          <Input
            style={{marginTop: 20}}
            value={topic}
            onChangeText={(value) => setTopic(value)}
          />
          <Input
            style={{marginTop: 11}}
            value={definition}
            onChangeText={(value) => setDef(value)}
          />

          <MyButton
            text={'Change todo'}
            onPress={() => {
              let obj = {
                topic: topic,
                definition: definition,
                size: props.route.params?.item.size,
              };
              if (topic != '' && definition != '') {
                props.changeItem(obj);
                props.navigation.navigate('ListPage');
              } else {
                Alert.alert(
                  'Error',
                  'you shall not pass with empty area',
                  [{text: 'OK'}],
                  {cancelable: false},
                );
              }
            }}
          />
        </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const {list, count} = state.listResponse;
  return {list, count};
};

export default connect(mapStateToProps, {changeItem})(ChangePage);
