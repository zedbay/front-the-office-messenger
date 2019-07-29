import React from 'react';
import './messenger.css';

import NetworkService from '../../services/network';

class Messenger extends React.Component {

    async componentDidMount() {
        let data = await NetworkService.get('/isAlive');
        console.log(data);
    }

    render() {
        return (
            <h1>Hello world</h1>
        );
    }

}

export default Messenger;