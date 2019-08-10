import { StyleSheet } from 'react-native';
import Config from '../../../../config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Config.Colors.appBackground,
    height: '100%',
  },
  title: {
    fontSize: 26,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
