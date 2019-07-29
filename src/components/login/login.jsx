import React from 'react';
import './login.scss';
import NetworkService from '../../services/network';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends React.Component {

    onLogin = (event) => {
        event.preventDefault();
        const body = {
            email: this.props.email,
            password: this.props.password
        }
        NetworkService.post('/login', body)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    this.props.history.push('/friends'); 
                }
            });
    }

    render() {
        return (
            <form onSubmit={(event) => { this.onLogin(event); }}>
                <TextField
                    value={this.props.email}
                    label="Your email"
                    onChange={(event) => { this.props.changeEmailForLogin(event.target.value) }}
                    className="input"
                    variant="outlined"
                />
                <TextField
                    value={this.props.password}
                    label="Your password"
                    onChange={(event) => { this.props.changePasswordForLogin(event.target.value) }}
                    type="password"
                    className="input"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
        );
    }

}

const mapStateToProps = state => {
    return {
        email: state.loginReducer.emailForLogin,
        password: state.loginReducer.passwordForLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePasswordForLogin: (value) => {
            dispatch({ type: 'CHANGE_PASSWORDLOGIN', value: value });
        },
        changeEmailForLogin: (value) => {
            dispatch({ type: 'CHANGE_EMAILFORLOGIN', value: value });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);