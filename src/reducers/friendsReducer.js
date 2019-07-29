const initStateFriends = {
    friendSelected: null, 
    friends: [],
    friendsOfFriendSelected: []
}

const friendsReducer = (state = initStateFriends, action) => {
    switch (action.type) {
        case 'CHANGE_FRIENDS':
            return { ...state, friends: action.value };
        case 'CHANGE_FRIENSELECTED':
            return { ...state, friendSelected: action.value };
        case 'RESET_FRIEND': 
            return { ...initStateFriends };
        case 'CHANGE_FRIENDSOFFRIENSELECTED':
            return { ...state, friendsOfFriendSelected: action.value };
        default:
            return state;
    }
}

export default friendsReducer;