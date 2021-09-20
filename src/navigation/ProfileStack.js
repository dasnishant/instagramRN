import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import FollowingScreen from '../screens/FollowingScreen';
import FollowersScreen from '../screens/FollowersScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {userLogOut} from '../actions';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName={'profileScreen'}>
      <Stack.Screen
        name="profileScreen"
        options={{
          title: 'Profile',
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <Ionicons
                name="log-out"
                size={25}
                color="black"
                style={{marginRight: 5}}
                onPress={() => dispatch(userLogOut())}
              />
            );
          },
        }}
        component={ProfileScreen}
        initialParams={{userId: userReducer.userId}}
      />
      <Stack.Screen
        name="following"
        options={{title: 'Following', headerBackTitleVisible: false}}
        component={FollowingScreen}
      />
      <Stack.Screen
        name="followers"
        options={{title: 'Followers', headerBackTitleVisible: false}}
        component={FollowersScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
