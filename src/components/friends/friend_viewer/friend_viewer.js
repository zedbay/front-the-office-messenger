import React from 'react';
import './friend_viewer.scss';

class FriendViewer extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        if (!this.props.element) {
            return (
                <div className="friendViewerContainer"></div>
            );
        }
        return (
            <div className="friendViewerContainer">
                <div className="mainInformations">
                    <img src={"profil_pictures/" + this.props.element.properties.photo} alt={this.props.element.properties.firstName}></img>
                    <div className="name">
                        <h2>{this.props.element.properties.firstName} {this.props.element.properties.name}</h2>
                        <p>{this.props.element.properties.entitled}</p>
                    </div>
                </div>
                <div className="friendsList">
                    <h3>Liste d'amis</h3>
                    {this.props.friends.map((element) => (
                        <div className="friend" key={element.identity.low}>
                            <img src={"profil_pictures/" + element.properties.photo} alt={element.properties.firstName}></img>
                            <p>{element.properties.firstName} {element.properties.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FriendViewer;