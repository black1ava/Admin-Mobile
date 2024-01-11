import React, {useCallback, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {widthToDP as wp} from 'react-native-responsive-screens';
import normalize from 'react-native-normalize';

import {styles} from './styles';
import {AutoHeightFastImage, PhoneInput, Button} from '../../Component';

function Login() {
  const [value, setValue] = useState('');

  const handleChange = useCallback(function (value) {
    setValue(value);
  });

  const handleKeyboardDismiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="height">
        <View style={styles.container}>
          <AutoHeightFastImage
            source={require('../../assets/logo.png')}
            width={wp('30%')}
          />
          <PhoneInput
            width={wp('100%') - 2 * normalize(20, 'width')}
            value={value}
            onChange={handleChange}
          />
          <Button style={styles.button} text="Login" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Login);
