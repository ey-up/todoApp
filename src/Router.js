import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListPage from './Pages/ListPage';
import AddPage from './Pages/AddPage';
import ChangePage from './Pages/ChangePage';
const Stack = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ListPage'>

                <Stack.Screen 
                name="ListPage" 
                component={ListPage} 
                options={({ navigation, route }) => ({ 
                    title: 'List',
                    headerTintColor:'white',
                    headerStyle: {
                        backgroundColor: 'darkblue'
                      },
                    
                    headerRight: () => (
                        <View>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('AddPage')}
                        style={{ 
                            marginRight: 20
                        }}
                        >
                            <Text style={{ fontSize: 30,color:'white',fontWeight:'bold'}}>+</Text>
                        </TouchableOpacity>
                        </View>
                      ),
                })}
                />
                
                
                <Stack.Screen 
                name="AddPage" 
                component={AddPage} 
                options={{ title: 'Add Todo' , headerTintColor:'white', headerStyle:{backgroundColor:'darkblue'}}}
                />

                 <Stack.Screen 
                name="ChangePage" 
                component={ChangePage} 
                options={{ title: 'Change todo' , headerTintColor:'white', headerStyle:{backgroundColor:'darkblue'}}}
                />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;