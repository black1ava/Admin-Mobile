import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    gap: normalize(10, 'height'),
    alignItems: 'center',
  },
  title: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(18),
  },
  description: {
    fontFamily: `${Font.NAME}-Regular`,
    fontSize: normalize(16),
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  action: {
    flex: 1,
    alignItems: 'center',
  },
  actionTitle: {
    color: Color.PRIMARY,
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
});
