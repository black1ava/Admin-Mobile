import React from 'react';
import {View, TextInput, Text} from 'react-native';
import normalize from 'react-native-normalize';
import PropTypes from 'prop-types';

import AutoHeightFastImage from '../AutoHeightFastImage';
import {styles} from './styles';

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
};

function PhoneInput({placeholder, value, onChangeValue}) {
  return (
    <View style={styles.container}>
      <AutoHeightFastImage
        source={require('../../assets/kh.png')}
        width={normalize(32, 'width')}
      />
      <Text style={styles.code}>+855</Text>
      <View style={styles.column} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeValue}
      />
    </View>
  );
}

PhoneInput.propTypes = propTypes;

export default React.memo(PhoneInput);
