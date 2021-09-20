import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Followers from '../components/FlatListItem/Followers';
import {firestoreDB} from '../firebase/services';

const FollowersScreen = ({navigation, route}) => {
  const [followers, setFollowers] = useState({isLoading: true});
  const [refreshing, setRefreshing] = useState(false);

  async function getFollowers() {
    let followersDoc = [];
    const followersRes = await firestoreDB
      .collection('users')
      .doc(route.params.userId)
      .collection('followers')
      .get();

    followersRes.forEach(doc => followersDoc.push({...doc.data(), id: doc.id}));

    setFollowers({isLoading: false, userFollowers: followersDoc});
  }

  function fetchFollowers() {
    setRefreshing(true);
    getFollowers();
    setRefreshing(false);
  }

  useEffect(() => {
    getFollowers();
  }, []);

  return followers.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <FlatList
      data={followers.userFollowers}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Followers item={item} navigation={navigation} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchFollowers} />
      }
    />
  );
};

export default FollowersScreen;
