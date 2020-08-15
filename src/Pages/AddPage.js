import {Input, MyButton} from '../Components';
import React, {useState} from 'react';
import {connect,} from 'react-redux';
import {updateList} from '../actions/index';
import {
  View,
} from 'react-native';

const AddPage = (props) => {
  const [topic, setTopic] = useState();
  const [definition, setDef] = useState();

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <Input
        placeholder="Topic"
        style={{marginTop: 10}}
        value={topic}
        onChangeText={(value) => setTopic(value)}
      />
      <Input
        placeholder="Definition"
        style={{marginTop: 10}}
        value={definition}
        onChangeText={(value) => setDef(value)}
      />
      <MyButton
        text={'Add todo'}
        onPress={() => {
          let obj = {
            topic: topic,
            definition: definition,
            size: props.sayi,
          };

          props.updateList(obj);
          props.navigation.navigate('ListPage');
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  const {list, sayi} = state.listResponse;
  return {list, sayi};
};

export default connect(mapStateToProps, {updateList})(AddPage);
