import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PRIMARY,
    padding: normalize(10),
    flexDirection: 'row',
    borderRadius: normalize(10),
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
    color: Color.LIGHT,
  },
});
