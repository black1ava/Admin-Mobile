import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import AutoHeightFastImage from '../AutoHeightFastImage';
import normalize from 'react-native-normalize';
import {Color} from '../../Constant';

const propTypes = {
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

function GoogleSignIn({onPress, loading}) {
  if (loading) {
    return (
      <ActivityIndicator
        color={Color.DARK}
        style={styles.loading}
        size="small"
      />
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.googleContainer}>
        <AutoHeightFastImage
          source={require('../../assets/google.png')}
          width={normalize(24, 'width')}
          style={styles.google}
        />
        <Text style={styles.text}>Sign In with Google</Text>
      </View>
    </TouchableOpacity>
  );
}

GoogleSignIn.propTypes = propTypes;

export default React.memo(GoogleSignIn);
