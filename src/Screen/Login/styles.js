import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {widthToDP as wp} from 'react-native-responsive-screens';

import {Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(20, 'height'),
    paddingHorizontal: normalize(20, 'width'),
  },
  mainContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  button: {
    width: wp('100%') - 2 * normalize(20, 'width'),
  },
  or: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
});
