import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {styles} from './styles';
import {Color} from '../../Constant';
import normalize from 'react-native-normalize';

const propTypes = {
  phone: PropTypes.string,
  onClose: PropTypes.func,
  onVerify: PropTypes.func,
  loading: PropTypes.bool,
};

const CELL_COUNT = 6;

function OTP({phone, onClose, onVerify, loading}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const head = useMemo(
    function () {
      return phone[0] === 0 ? phone.substring(1, 3) : phone.substring(0, 2);
    },
    [phone],
  );

  const body = useMemo(
    function () {
      return phone[0] === 0 ? phone.substring(3) : phone.substring(2);
    },
    [phone],
  );

  const handlePress = useCallback(
    function () {
      onVerify(value);
    },
    [onVerify, value],
  );

  const renderVerify = useMemo(
    function () {
      return loading ? (
        <ActivityIndicator color={Color.PRIMARY} size="small" />
      ) : (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.verify}>Verify</Text>
        </TouchableOpacity>
      );
    },
    [loading, handlePress],
  );

  const handleKeyboardDimsiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDimsiss}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            {renderVerify}
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.instruction}>
              We have sent OTP to +855 {head} {body}
            </Text>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

OTP.propTypes = propTypes;

export default React.memo(OTP);
