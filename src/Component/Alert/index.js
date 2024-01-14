import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import AutoHeightFastImage from '../AutoHeightFastImage';
import {styles} from './styles';
import normalize from 'react-native-normalize';

const propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  actions: PropTypes.shape({
    action: PropTypes.shape({
      title: PropTypes.string,
      onAction: PropTypes.func,
    }),
    destructiveAction: PropTypes.shape({
      title: PropTypes.string,
      onAction: PropTypes.func,
    }),
  }),
};

function Alert({visible, title, description, actions}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AutoHeightFastImage
          source={require('../../assets/alert.png')}
          width={normalize(50, 'width')}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.action}
            onPress={actions?.action?.onAction}>
            <Text style={styles.actionTitle}>{actions?.action?.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

Alert.propTypes = propTypes;

export default React.memo(Alert);
