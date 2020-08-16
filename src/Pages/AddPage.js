import {Input, MyButton} from '../Components';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateList} from '../actions/index';
import {View, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPage = (props) => {
  const [topic, setTopic] = useState('');
  const [definition, setDef] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <Input
        placeholder="Topic"
        style={{marginTop: 20}}
        value={topic}
        onChangeText={(value) => setTopic(value)}
      />
      <Input
        placeholder="Definition"
        style={{marginTop: 11}}
        value={definition}
        onChangeText={(value) => setDef(value)}
      />
      <MyButton
        text={'Add todo'}
        onPress={() => {
          let obj = {
            topic: topic,
            definition: definition,
            size: props.count,
          };
          if (topic != '' && definition != '') {
            props.updateList(obj);
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

export default connect(mapStateToProps, {updateList})(AddPage);
