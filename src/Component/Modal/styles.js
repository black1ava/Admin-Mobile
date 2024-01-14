import {StyleSheet} from 'react-native';
import {widthToDP as wp} from 'react-native-responsive-screens';

import {Color} from '../../Constant';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Color.DARK}90`,
  },
  modalContainer: {
    width: wp('80%'),
    backgroundColor: Color.LIGHT,
    padding: normalize(10),
    borderRadius: normalize(10),
  },
});
