import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import Following from '../components/FlatListItem/Following';
import {firestoreDB} from '../firebase/services';

const FollowingScreen = ({navigation, route}) => {
  const [following, setFollowing] = useState({isLoading: true});
  const [refreshing, setRefreshing] = useState(false);

  async function getFollowing() {
    let followingDoc = [];
    const followingRes = await firestoreDB
      .collection('users')
      .doc(route.params.userId)
      .collection('following')
      .get();

    followingRes.forEach(doc => followingDoc.push({...doc.data(), id: doc.id}));

    setFollowing({isLoading: false, userFollowing: followingDoc});
  }

  function fetchFollowing() {
    setRefreshing(true);
    getFollowing();
    setRefreshing(false);
  }

  useEffect(() => {
    getFollowing();
  }, []);

  return following.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <FlatList
      data={following.userFollowing}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Following item={item} navigation={navigation} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchFollowing} />
      }
    />
  );
};

export default FollowingScreen;
