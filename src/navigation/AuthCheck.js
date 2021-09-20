import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

const AuthCheck = ({navigation}) => {
  const userId = useSelector(state => state.userReducer.userId);

  useEffect(() => {
    if (userId) {
      navigation.reset({
        index: 0,
        routes: [{name: 'AppStack'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'AuthStack'}],
      });
    }

  }, [userId]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default AuthCheck;
