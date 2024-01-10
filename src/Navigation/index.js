import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';

function Navigation() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

export default React.memo(Navigation);
