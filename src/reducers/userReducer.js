const userInitialState = {
  userId: null,
  displayName: null,
  error: null,
  // isProfileLoading: true,
  // followersCount: null,
  // followingCount: null,
  // postsCount: null,
  // posts: [],
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'USER_SIGN_UP':
      return {
        ...state,
        userId: action.payload.userId,
        displayName: action.payload.displayName,
        error: null,
      };
    case 'USER_LOG_IN':
      return {
        ...state,
        userId: action.payload.userId,
        displayName: action.payload.displayName,
        error: null,
      };

    // case 'SET_PROFILE':
    //   return {
    //     ...state,
        // isProfileLoading: action.payload.isProfileLoading,
        // posts: action.payload.posts,
        // followersCount: action.payload.followers,
        // followingCount: action.payload.following,
        // postsCount: action.payload.postsCount,
      // };
    case 'SET_ERROR':
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default userReducer;
