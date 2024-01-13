import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';

function Navigation() {
  return (
    <React.Fragment>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </React.Fragment>
  );
}

export default React.memo(Navigation);
