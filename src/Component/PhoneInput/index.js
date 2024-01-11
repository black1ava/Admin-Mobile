import React from 'react';
import {View, Text} from 'react-native';
import normalize from 'react-native-normalize';

import AutoHeightFastImage from '../AutoHeightFastImage';

function PhoneInput() {
  return (
    <View>
      <AutoHeightFastImage
        source={require('../../assets/kh.png')}
        width={normalize(32, 'width')}
      />
    </View>
  );
}

export default React.memo(PhoneInput);
