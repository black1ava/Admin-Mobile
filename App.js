import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppContainer from './src';

function App() {
  useEffect(function () {
    SplashScreen.hide();
  }, []);

  return <AppContainer />;
}

export default React.memo(App);
