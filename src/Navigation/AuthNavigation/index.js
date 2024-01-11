import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screen} from '../../Constant';
import {LoginScreen} from '../../Screen';
import {styles} from './styles';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: styles.container,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.font,
      }}>
      <Stack.Screen
        name={Screen.LOGIN}
        component={LoginScreen}
        options={{title: 'Login'}}
      />
    </Stack.Navigator>
  );
}

export default React.memo(AuthNavigation);
