import React, { useEffect } from 'react';
import { View, Text  } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(){

  useEffect(function(){
    SplashScreen.hide();
  }, []);

  return <View>
    <Text>App</Text>
  </View>
}

export default React.memo(App);