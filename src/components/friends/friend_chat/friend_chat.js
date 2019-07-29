import React from 'react';
import './friend_chat.scss';

import NetworkService from '../../../services/network';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

class FriendChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            currentMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

    }

    componentWillReceiveProps() {
        this.loadMessages();
    }

    loadMessages() {
        if (this.props.element && this.props.element.identity.low) {
            NetworkService.get(`/room/${this.props.element.identity.low}`)
                .then((res) => {
                    this.setState({ messages: res.data });
                });
        }
    }

    render() {
        return (
            <div className="chatContainer">
                <div className="messagesContainer">
                    {this.state.messages.map((element) => (
                        <div className="message" key={element.identity.low}>
                            <p>{element.properties.content}</p>
                        </div>
                    ))}
                </div>
                <form>
                    <TextField
                        value={this.state.currentMessage}
                        onChange={(event) => { this.setState({ currentMessage: event.target.value }) }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        <SendIcon />
                    </Button>
                </form>
            </div>
        );
    }
}

export default FriendChat;