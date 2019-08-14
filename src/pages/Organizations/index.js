import React, {Component} from 'react';

import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import Header from '~/components/Header';

import OrganizationItem from './OrganizationItem';
import styles from './styles';

const TabIcon = ({tintColor}) => (
  <Icon name="building" size={20} color={tintColor} />
);

TabIcon.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({refreshing: true});

    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/orgs`);

    this.setState({data, loading: false, refreshing: false});
  };

  renderListItem = ({item}) => <OrganizationItem organization={item} />;

  renderList = () => {
    const {data, refreshing} = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {this.loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
