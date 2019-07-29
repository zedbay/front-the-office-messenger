import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <List>

                    <ListItem button component={Link} to="/login">
                        <ListItemIcon>
                            <PowerSettingsNewIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login"></ListItemText>
                    </ListItem>

                    <ListItem button component={Link} to="/home">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home"></ListItemText>
                    </ListItem>

                    <ListItem button component={Link} to="/friends">
                        <ListItemIcon>
                            <SupervisorAccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="Friends"></ListItemText>
                    </ListItem>

                    <ListItem button component={Link} to="/messenger">
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messenger"></ListItemText>
                    </ListItem>

                </List>
            </div>
        );
    }
}

export default Header;