import {Input, MyButton} from '../Components';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateList} from '../actions/index';
import {
  View,
  Alert,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const AddPage = (props) => {
  const [topic, setTopic] = useState('');
  const [definition, setDef] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [dateDisplay, setDateDisplay] = useState('Tue, 18 Aug 2020');

  const handleConfirm = (date) => {
    setDateDisplay(date.toUTCString());
    setVisibility(false);
  };

  const onPressCancel = () => {
    setVisibility(false);
  };

  const onPressButton = () => {
    setVisibility(true);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.container}>
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
        <View style={styles.dateView}>
        <TouchableOpacity onPress={onPressButton}>
            <Image
              source={require('../images/date.png')}
              style={styles.miniLogo}
            />
          </TouchableOpacity>
          <Text style={[styles.dateText]}>{dateDisplay.slice(0, 16)}</Text>
          
          <DateTimePickerModal
            isVisible={visibility}
            onConfirm={handleConfirm}
            onCancel={onPressCancel}
            mode="date"
            display="spinner"
          />
        </View>
        <MyButton
          text={'Add todo'}
          onPress={() => {
            let obj = {
              topic: topic,
              definition: definition,
              size: props.count,
              date: dateDisplay.slice(0, 16)
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
const styles = StyleSheet.create({
  dateView: {
    color: 'white',
    height: height * 0.08,
    width:200,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:17,
    marginLeft: width / 20,
    marginRight: width / 20,
    
    
  },
  miniLogo: {
    height: 42,
    width: 42,
    alignSelf:'center',
    alignItems: 'center',
    alignContent:'center',


  },
  dateText:{
    fontSize:17,color:'darkblue',marginLeft:17,fontWeight:'bold'
  },
  container:{
    flex: 1, flexDirection: 'column', backgroundColor: 'white',
  }
});
const mapStateToProps = (state) => {
  const {count} = state.listResponse;
  return {count};
};

export default connect(mapStateToProps, {updateList})(AddPage);
