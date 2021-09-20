import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {sagaGetFeeds} from '../actions/index';
import Post from '../components/Post';

const HomeScreen = () => {
  const feedsReducer = useSelector(state => state.feedsReducer);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(sagaGetFeeds());
    return () => {};
  }, []);

  const fetchFeeds = () => {
    setRefreshing(true);
    dispatch(sagaGetFeeds());
    setRefreshing(false);
  };

  return feedsReducer.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <FlatList
      data={feedsReducer.feeds}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Post post={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchFeeds} />
      }
    />
  );
};

export default HomeScreen;
