import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10, 'width'),
    backgroundColor: Color.LIGHT,
    elevation: 5,
    margin: 5,
    padding: normalize(10, 'height'),
    borderRadius: normalize(10),
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
  code: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
  column: {
    height: normalize(32, 'height'),
    width: 1,
    backgroundColor: Color.DARK,
  },
});
