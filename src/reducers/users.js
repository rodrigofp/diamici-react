export default  (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            };
        case 'LOGOUT':
            return {
                ...state,
                uid: undefined
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}