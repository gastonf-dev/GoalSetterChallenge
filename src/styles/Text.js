import {Platform, StyleSheet} from 'react-native';
const TEXT = StyleSheet.create({
  fontFamily: Platform.OS === 'ios' ? 'Avenir LT Std' : 'AvenirLTStd',
});

export default TEXT;
