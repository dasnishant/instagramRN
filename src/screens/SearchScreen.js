import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSagaAllUsers} from '../actions';
import Search from '../components/FlatListItem/Search';

const SearchScreen = () => {
  const allUsersReducer = useSelector(state => state.allUsersReducer);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(setSagaAllUsers());
    return () => {};
  }, []);

  function fetchUsers() {
    setRefreshing(true);
    dispatch(setSagaAllUsers());
    setRefreshing(false);
  }

  return allUsersReducer.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <FlatList
      data={allUsersReducer.allUsers}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Search item={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchUsers} />
      }
    />
  );
};

export default SearchScreen;
