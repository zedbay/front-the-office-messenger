import React from 'react';
import './friend_list.scss';

import FriendCard from './friend_card/friend_card';

class FriendList extends React.Component {

    render() {
        return (
            <div className="listFriends">
                {this.props.friends.map((element) => (
                    <div key={element.identity.low} onClick={() => this.props.switchFriendPreview(element)}>
                        <FriendCard element={element} />
                    </div>
                ))}
            </div >
        );
    }
    
}

export default FriendList;