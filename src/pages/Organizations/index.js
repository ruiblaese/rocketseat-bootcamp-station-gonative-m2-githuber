import React from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

const Organizations = () => (
  <View>
    <Header title="Organizações" />
  </View>
);

const TabIcon = ({tintColor}) => (
  <Icon name="building" size={20} color={tintColor} />
);

Organizations.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organizations;
