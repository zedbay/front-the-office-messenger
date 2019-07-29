import React from 'react';
import './home.scss';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Home extends React.Component {

    render() {
        return (
            <div className="homeContainer">
                <div className="posts">
                    {this.props.posts.map((post) => (
                        <div className="post" key={post.id}>
                            <h4>{post.title}</h4>
                            <Button variant="contained" color="secondary" onClick={() => {
                                this.props.deletePost(post.id);
                            }}>Supprimer</Button>
                        </div>
                    ))}
                </div>
                <form>
                    <TextField
                        value={this.props.inputNewArticle}
                        variant="outlined"
                        onChange={(event) => { this.props.changeInputNewArticle(event.target.value); }}
                    />
                    <Button variant="contained" color="primary" onClick={() => {
                        this.props.addPost()
                    }}>
                        Ajouter
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.homeReducer.posts,
        inputNewArticle: state.homeReducer.inputNewArticle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => {
            dispatch({ type: 'DELETE_POST', id: id });
        },
        addPost: () => {
            dispatch({ type: 'ADD_POST' });
        },
        changeInputNewArticle: (value) => {
            dispatch({ type: 'CHANGE_INPUTNEWARTICLE', value: value });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);