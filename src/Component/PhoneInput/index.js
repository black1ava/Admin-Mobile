import React from 'react';
import {View, Text, TextInput} from 'react-native';
import normalize from 'react-native-normalize';
import PropTypes from 'prop-types';

import AutoHeightFastImage from '../AutoHeightFastImage';
import {styles} from './styles';

const propTypes = {
  width: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function PhoneInput({width, value, onChange}) {
  return (
    <View style={{...styles.container, width}}>
      <AutoHeightFastImage
        source={require('../../assets/kh.png')}
        width={normalize(32, 'width')}
      />
      <Text style={styles.code}>+855</Text>
      <TextInput
        style={styles.phone}
        placeholder="Phone number"
        value={value}
        onChangeText={onChange}
        keyboardType="phone-pad"
      />
    </View>
  );
}

PhoneInput.propTypes = propTypes;

export default React.memo(PhoneInput);
