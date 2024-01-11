import React from 'react';
import {View, Text} from 'react-native';
import {widthToDP as wp} from 'react-native-responsive-screens';

import {styles} from './styles';
import {AutoHeightFastImage, PhoneInput} from '../../Component';

function Login() {
  return (
    <View style={styles.container}>
      <AutoHeightFastImage
        source={require('../../assets/logo.png')}
        width={wp('30%')}
      />
      <PhoneInput />
    </View>
  );
}

export default React.memo(Login);
