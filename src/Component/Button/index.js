import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

const propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

function Button({text, style, onPress}) {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = propTypes;

export default React.memo(Button);
