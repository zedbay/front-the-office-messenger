import React from 'react';
import './friend_card.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

class FriendCard extends React.Component {

    render() {
        return (
            <Card className="friendCard">
                <CardMedia
                    title={this.props.element.properties.name}
                    src="null">
                    <img src={"/profil_pictures/" + this.props.element.properties.photo} alt={this.props.element.properties.name}></img>
                </CardMedia>
                <CardContent>
                    <Typography>
                        {this.props.element.properties.firstName} {this.props.element.properties.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {this.props.element.properties.entitled}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default FriendCard;