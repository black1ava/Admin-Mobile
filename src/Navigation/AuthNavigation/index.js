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
      }}>
      <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default React.memo(AuthNavigation);
