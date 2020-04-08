import {StyleSheet} from 'react-native';
import {Mixins, Spacing} from '_styles';

const styles = StyleSheet.create({
  p: {...Mixins.padding(Spacing.SCALE_12)},
});
