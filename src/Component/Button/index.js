import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

const propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = propTypes;

export default React.memo(Button);
