import {StyleSheet} from 'react-native';
import {Color, Font} from '../../Constant';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.LIGHT,
    elevation: 5,
    margin: 5,
    flexDirection: 'row',
    borderRadius: normalize(10),
  },
  googleContainer: {
    flex: 1,
    padding: normalize(10, 'width'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    fontFamily: `${Font}-Medium`,
    fontSize: normalize(16),
  },
  google: {
    position: 'absolute',
    left: normalize(20, 'width'),
  },
  loading: {
    alignSelf: 'center',
  },
});
