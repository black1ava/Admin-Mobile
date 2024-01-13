import React, {useCallback, useState} from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {widthToDP as wp} from 'react-native-responsive-screens';
import normalize from 'react-native-normalize';

import {styles} from './styles';
import {AutoHeightFastImage, PhoneInput, Button} from '../../Component';

function Login() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = useCallback(function (value) {
    setPhone(value);
  }, []);

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
            placeholder="Please input your phone number"
            value={phone}
            onChangeValue={handlePhoneChange}
          />
          <Button title="Login" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Login);
