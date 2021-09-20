import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import { sagaToggleLike } from '../actions';

const Post = ({post}) => {
  const userId = useSelector(state => state.userReducer.userId);
  const dispatch = useDispatch();
  const toggleLike = (postId, ownerId, likes, likeStatus) => () => {
    dispatch(sagaToggleLike({postId, ownerId, likes, likeStatus}));
  };

  return (
    <View>
      <Image
        source={{
          uri: post.imageUrl,
        }}
        style={{width: '100%', height: 400, resizeMode: 'contain'}}
      />
      <View style={{marginVertical: 10, marginHorizontal: 15}}>
        {post.likes.includes(userId) ? (
          <Ionicons
            name="heart"
            size={25}
            color="#b22222"
            style={{marginBottom: 5}}
            onPress={toggleLike(
              post.id,
              post.ownerId,
              post.likes,
              false,
            )}
          />
        ) : (
          <Ionicons
            name="heart-outline"
            size={25}
            color="black"
            style={{marginBottom: 5}}
            onPress={toggleLike(
              post.id,
              post.ownerId,
              post.likes,
              true,
            )}
          />
        )}
        <Text style={{fontWeight: 'bold'}}>
          Caption:
          <Text style={{fontWeight: '300'}}>{' ' + post.caption}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Post;

//todo image dynamic resize


