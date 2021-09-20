import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {sagaFollow, sagaUnfollow} from '../../actions';

const Search = ({item}) => {
  const allUsersReducer = useSelector(state => state.allUsersReducer);
  const dispatch = useDispatch();

  const follow = user => () => {
    console.log(user);
    dispatch(sagaFollow(user));
  };

  const unFollow = user => () => {
    console.log(user);
    dispatch(sagaUnfollow(user));
  };

  return (
    <View style={styles.userItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profilePic}>
          <Text style={{fontWeight: '600', fontSize: 20, color: 'white'}}>
            {item.displayName[0]}
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
          {item.displayName}
        </Text>
      </View>
      {allUsersReducer.following &&
      allUsersReducer.following.includes(item.id) ? (
        <TouchableOpacity
          style={styles.followingBtn}
          activeOpacity={0.6}
          onPress={unFollow(item)}>
          <Text style={{color: 'black', fontWeight: '600'}}>Following</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.followBtn}
          activeOpacity={0.6}
          onPress={follow(item)}>
          <Text style={{color: 'white', fontWeight: '600'}}>Follow</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'chocolate',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followBtn: {
    width: 100,
    height: 25,
    backgroundColor: '#0084FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  followingBtn: {
    width: 100,
    height: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default Search;
