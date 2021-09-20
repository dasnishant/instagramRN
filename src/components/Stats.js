import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Stats = ({name, count, routeName, navigation, route}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
      }}
      activeOpacity={0.6}
      onPress={() => {
        if (routeName)
          navigation.push(routeName, {userId: route.params.userId});
      }}>
      <Text style={{fontWeight: '500', fontSize: 20}}>{count}</Text>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Stats;
