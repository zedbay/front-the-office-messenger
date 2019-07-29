import React from 'react';
import './friends.scss';
import NetworkService from '../../services/network';
import FriendViewer from './friend_viewer/friend_viewer';
import FriendChat from './friend_chat/friend_chat';
import FriendList from './friend_list/friend_list';
import { connect } from 'react-redux';

class Friends extends React.Component {

    componentWillMount() {
        if (localStorage.getItem('token') === null) {
            this.props.history.push('login');
        } else {
            NetworkService.get('/user/friendsList')
                .then((res) => {
                    this.props.changeFriends(res.data.data);
                    this.onFriendSelection(res.data.data[0]);
                });
        }
    }

    onFriendSelection = (friend) => {
        this.props.changeFriendSelected(friend);
        console.log(friend);
        NetworkService.get(`/user/friendsList/${friend.identity.low}`)
            .then((res) => {
                this.props.chngeFriendsOfFriendSelected(res.data.data);
            });
    }

    render() {
        return (
            <div className="friend-container">
                <FriendList friends={this.props.friends} switchFriendPreview={this.onFriendSelection} />
                <FriendViewer element={this.props.friendSelected} friends={this.props.friendsOfFriendSelected} />
                <FriendChat element={this.props.friendSelected} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        friendSelected: state.friendsReducer.friendSelected,
        friendsOfFriendSelected: state.friendsReducer.friendsOfFriendSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFriends: (value) => {
            dispatch({ type: 'CHANGE_FRIENDS', value: value });
        },
        changeFriendSelected: (value) => {
            dispatch({ type: 'CHANGE_FRIENSELECTED', value: value });
        },
        chngeFriendsOfFriendSelected: (value) => {
            dispatch({ type: 'CHANGE_FRIENDSOFFRIENSELECTED', value: value });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);