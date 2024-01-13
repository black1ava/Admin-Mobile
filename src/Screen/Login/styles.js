import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

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
});
