import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    backgroundColor: colors.white,

    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    color: colors.daker,
    fontSize: 16,
    fontWeight: 'bold',
  },

  icon: {
    color: colors.daker,
  },
});

export default styles;
