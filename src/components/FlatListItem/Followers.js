import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Followers = ({item, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.push('profileScreen', {userId: item.id});
      }}>
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
      </View>
    </TouchableOpacity>
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
});

export default Followers;
