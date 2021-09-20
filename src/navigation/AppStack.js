import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const AppStack = ({navigation}) => {
  const userReducer = useSelector(state => state.userReducer);

  useEffect(() => {
    if (!userReducer.userId) {
      navigation.reset({
        index: 0,
        routes: [{name: 'AuthStack'}],
      });
    }
    return () => {};
  }, [userReducer.userId]);

  return (
    userReducer.userId && (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4c4c4c',
          tabBarInactiveTintColor: 'dimgray',
          tabBarLabel: () => {
            return null;
          },
        })}>
        <Tab.Screen
          name="home"
          options={{title: 'Instagram'}}
          component={HomeScreen}
        />
        <Tab.Screen
          name="search"
          options={{title: 'Users'}}
          component={SearchScreen}
        />

        <Tab.Screen
          name="profile"
          options={{
            headerShown: false,
          }}
          component={ProfileStack}
        />
      </Tab.Navigator>
    )
  );
};

export default AppStack;
