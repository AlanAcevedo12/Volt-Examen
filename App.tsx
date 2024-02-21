import React from 'react';
import Home from './Activities/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dog from './Activities/Apis/Dog/Dog';
import Newspaper from './Activities/Apis/Newspapers/Newspaper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import Pharmacy from './Activities/Apis/Pharmacy/Pharmacy';
import Crypto from './Activities/Apis/Crypto/Crypto';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Dog"
          component={Dog}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dog" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Newspaper"
          component={Newspaper}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}

        />
        <Tab.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="medkit" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Crypto"
          component={Crypto}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
