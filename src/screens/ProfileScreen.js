import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  RefreshControl,
} from 'react-native';
import Stats from '../components/Stats';
import {firestoreDB} from '../firebase/services';

const ProfileScreen = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;
  const [profile, setProfile] = useState({isLoading: true});
  const [refreshing, setRefreshing] = useState(false);

  async function getProfile() {
    let postsDoc = [];
    const res = await firestoreDB
      .collection('users')
      .doc(route.params.userId)
      .get();

    const posts = await firestoreDB
      .collection('users')
      .doc(route.params.userId)
      .collection('posts')
      .get();

    posts.forEach(post => {
      postsDoc.push(post.data());
    });
    setProfile({isLoading: false, ...res.data(), posts: postsDoc});
  }

  useEffect(() => {
    getProfile();
  }, []);

  function fetchProfile() {
    setRefreshing(true);
    getProfile();
    setRefreshing(false);
  }

  return profile.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <View
      style={{
        marginHorizontal: 20,
      }}>
      <FlatList
        style={{flexDirection: 'row', flexWrap: 'wrap'}}
        ListHeaderComponent={
          <>
            <View
              style={{
                paddingTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.profilePic}>
                <Text style={{fontWeight: '400', fontSize: 60, color: 'white'}}>
                  {profile.displayName[0]}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 25}}>
                <Stats name={'Posts'} count={profile.postsCount} />
                <Stats
                  name={'Followers'}
                  count={profile.followers}
                  routeName={'followers'}
                  navigation={navigation}
                  route={route}
                />
                <Stats
                  name={'Following'}
                  count={profile.following}
                  routeName={'following'}
                  navigation={navigation}
                  route={route}
                />
              </View>
            </View>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
                marginVertical: 20,
                marginLeft: 15,
              }}>
              {profile.displayName}
            </Text>
          </>
        }
        data={profile.posts}
        keyExtracter={item => item.id}
        numColumns={3}
        renderItem={({item}) => (
          <Image
            source={{uri: item.imageUrl}}
            style={{
              width: (windowWidth - 52) / 3,
              height: (windowWidth - 52) / 3,
              margin: 2,
            }}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchProfile} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'chocolate',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
