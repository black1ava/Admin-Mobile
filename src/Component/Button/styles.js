import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PRIMARY,
    padding: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(10),
  },
  text: {
    color: Color.LIGHT,
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(18),
  },
});
