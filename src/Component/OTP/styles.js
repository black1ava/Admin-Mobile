import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  cancel: {
    color: Color.RED,
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
  verify: {
    color: Color.PRIMARY,
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(10, 'height'),
  },
  instruction: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
  codeFieldRoot: {
    gap: normalize(10, 'width'),
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: `${Color.DARK}30`,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: `${Color.DARK}`,
  },
});
