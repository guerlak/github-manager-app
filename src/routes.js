import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './Pages/Main';
import User from './Pages/User';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  return route.params.user.name;
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'GitHub Users',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'orange',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
