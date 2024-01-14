import React, {useCallback} from 'react';
import RNBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {styles} from './styles';

const propTypes = {
  snapPoints: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  index: PropTypes.number,
  children: PropTypes.node,
};

const BottomSheet = React.forwardRef(function BottomSheet(
  {snapPoints, index, children},
  ref,
) {
  const renderBackdrop = useCallback(function (props) {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="none"
      />
    );
  }, []);

  return (
    <RNBottomSheet
      snapPoints={snapPoints}
      index={index}
      backdropComponent={renderBackdrop}
      handleStyle={styles.handle}
      ref={ref}>
      <View style={styles.container}>{children}</View>
    </RNBottomSheet>
  );
});

BottomSheet.propTypes = propTypes;

export default React.memo(BottomSheet);
