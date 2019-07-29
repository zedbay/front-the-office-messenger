import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/rootReducer';

import './index.scss';
import 'typeface-roboto';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import Friends from './components/friends/friends.jsx';
import Messenger from './components/messenger/messenger';
import Login from './components/login/login.jsx';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {

    render() {
        return (
            <div className="main">
                <Router>
                    <Header className="header"></Header>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/friends" component={Friends} />
                    <Route path="/messenger" component={Messenger} />
                    <Route path="/login" component={Login} />
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);