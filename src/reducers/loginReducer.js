const initStateLogin = {
    emailForLogin: '',
    passwordForLogin: ''
}

const loginReducer = (state = initStateLogin, action) => {
    switch (action.type) {
        case 'CHANGE_PASSWORDLOGIN':
            return { ...state, passwordForLogin: action.value };
        case 'CHANGE_EMAILFORLOGIN':
            return { ...state, emailForLogin: action.value };
        default:
            return state;
    }
}

export default loginReducer;