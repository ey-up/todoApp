import React, { useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  
} from 'react-native';
import {connect, } from 'react-redux';
import {getListFromLocal, deleteItem} from '../actions/index';
import AsyncStorage from '@react-native-community/async-storage';

const windowWidth = Dimensions.get('window').width;

const ListPage = (props) => {
  //AsyncStorage.clear();
  useEffect(() => {
    props.getListFromLocal();
  });


  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'column', flex: 0.7}}>
        <View style={{flexDirection: 'row'}}>
         
          <Text style={styles.topic}>{item.topic}</Text>
        </View>

        <Text style={styles.definition}>{item.definition}</Text>
        {/*<Text>{item.size}</Text> */}
      </View>

      <View style={styles.separatedLine}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Delete",
              "Are you sure",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => props.deleteItem(item) }
              ],
              { cancelable: false }
            );
            
          }}>
          <Image
            source={require('../images/delete.png')}
            style={styles.miniLogo}
          />
        </TouchableOpacity>
        <Text> {item.date} </Text>
        <TouchableOpacity
         onPress={() =>{
          props.navigation.navigate('ChangePage', {item:item});
          
         }}
        >
          <Image
            source={require('../images/refresh.png')}
            style={styles.miniLogo2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={props.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.size.toString()}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                height: 300,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 10, marginBottom: 30, fontSize: 25}}>
                Şuan list boş.
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 12,
    paddingTop: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#e1e6e2',
    flex: 1,
  },
  topic: {
    paddingRight: 25,
    paddingLeft: 15,
    fontWeight:'bold',
    fontSize: 15,
  },
  definition: {
    fontSize: 17,
    marginTop:15,
    marginBottom:15,
    paddingRight: 23,
    paddingLeft: 23,
  },
  miniLogo: {
    height: 21,
    width: 21,
    marginLeft: 15,
  },
  separatedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  miniLogo2: {
    height: 21,
    width: 21,
    marginRight: 15,
  },
});

const mapStateToProps = (state) => {
  const {list} = state.listResponse;
  return {list};
};

export default connect(mapStateToProps, {getListFromLocal, deleteItem})( ListPage);
