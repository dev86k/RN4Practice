import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet,Button,Image } from 'react-native';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

// 追加
import Icon from '@expo/vector-icons/FontAwesome';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="news"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="book" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="おうち"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="会員証"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="idcard" size={24} color="purple" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator({ navigation }) {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerRight: (props) => (
                     <AntDesign name="bars" size={26} color="black" style={{ marginRight: 10 }}
                       {...props}
                       onPress={() => {
                         navigation.goBack()
                       }}
                     />
                   ),
                headerLeft: (props) => (
                     <HeaderBackButton
                       {...props}
                       onPress={() => {
                         navigation.goBack()
                       }}
                     />
                   ),
              }}
      />
    </TabThreeStack.Navigator>
  );
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('../assets/images/favicon.png')}
    />
  );
}
