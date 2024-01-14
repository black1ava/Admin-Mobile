import React, {useMemo} from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {Color} from '../../Constant';

const propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

function Button({title, onPress, loading}) {
  const content = useMemo(
    function () {
      return loading ? (
        <ActivityIndicator color={Color.LIGHT} size="small" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      );
    },
    [loading, title],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleContainer}>{content}</View>
    </TouchableOpacity>
  );
}

Button.propTypes = propTypes;

export default React.memo(Button);
