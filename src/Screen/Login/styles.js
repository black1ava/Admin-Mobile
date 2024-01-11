import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {widthToDP as wp} from 'react-native-responsive-screens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(20, 'height'),
  },
  mainContainer: {
    flex: 1,
  },
  button: {
    width: wp('100%') - 2 * normalize(20, 'width'),
  },
});
