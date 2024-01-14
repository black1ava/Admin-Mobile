import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  handle: {
    display: 'none',
  },
  container: {
    padding: normalize(20, 'width'),
    flex: 1,
  },
});
