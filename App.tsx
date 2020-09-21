import React from 'react';
import { Button, View, Text,StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
const ITEM_WIDTH = Dimensions.get('window').width;
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'TabA') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'TabB') {
        iconName = focused
        ? 'ios-list-box'
        : 'ios-list';
      }
return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="TabA" component={TabAScreen} />
        <Tab.Screen name="TabB" component={TabBScreen} />
    </Tab.Navigator>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}
const Stack = createStackNavigator();
function TabAScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen}
      options={{
          headerTitle: "TabA",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: (props) => (
                   <AntDesign name="bars" size={26} color="white" style={{ marginRight: 10 }}
                     {...props}
                       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                   />
                 ),
        }} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}
function TabADetailsScreen({navigation}) {
state = {
list: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
}
return (
        <View style={styles.container}>
          <FlatList
          data={state.list}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}

          renderItem={({item}) => (
            <View>
             <Image
              source={{ uri: 'https://source.unsplash.com/random?'+item }}
              style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>test</Text>
            </View>
          )}
          />
        </View>
);
/*
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button
      onPress={() => navigation.navigate('TabA Details')}
      title="Go to TabA Details"
      />
    </View>
  );
  */
}
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      drawerPosition={'right'}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageStyle: {
    width: ITEM_WIDTH / 2,
    height: ITEM_WIDTH / 3,
    margin: 1,
    resizeMode: 'cover',
  },
  textStyle: {
    marginBottom: 10,
  },
});
