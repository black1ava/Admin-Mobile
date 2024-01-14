import React from 'react';
import {Modal as RNModal, View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

const propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

function Modal({visible, children}) {
  return (
    <RNModal transparent visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </RNModal>
  );
}

Modal.propTypes = propTypes;

export default React.memo(Modal);
