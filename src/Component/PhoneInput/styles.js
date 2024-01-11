import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: normalize(10, 'width'),
    alignItems: 'center',
  },
  code: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(18),
  },
  phone: {
    flex: 1,
    paddingVertical: 0,
    fontSize: normalize(18),
    fontFamily: `${Font.NAME}-Medium`,
    paddingBottom: normalize(2, 'height'),
    borderBottomWidth: 1,
  },
});
