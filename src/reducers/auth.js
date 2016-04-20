// hardcoded client ID, should be passed from external config, process.env

const initialState = {
    token: null,
    config: {
        clientID : 'f3a6c9358a522a92fe6b',
        clientSecret: '29e39b8a15aa8d010ff07d92ce171bd9758a3c2b'
    }
};

export function auth(state = initialState, action) {

    switch (action.type) {
        case 'UPDATE_TOKEN':
            return {
                ...state,
                token: action.token
            };

        default:
            return state;
    }
}
