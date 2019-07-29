const initStateHome = {
    posts: [
        {
            id: 1,
            title: "Premier article"
        },
        {
            id: 2,
            title: "Deuxième article"
        },
        {
            id: 3,
            title: "Troisième article"
        }
    ],
    inputNewArticle: ''
}

const homeReducer = (state = initStateHome, action) => {
    switch (action.type) {

        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id
            });
            return { ...state, posts: newPosts };

        case 'ADD_POST':
            let newId = state.posts[state.posts.length - 1].id + 1;
            let newPost = { id: newId, title: state.inputNewArticle };
            return { ...state, posts: state.posts.concat(newPost), inputNewArticle: '' };

        case 'CHANGE_INPUTNEWARTICLE':
            return { ...state, inputNewArticle: action.value };

        default:
            return state;
    }
}

export default homeReducer;