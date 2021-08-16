const filtersReducerDefaultState = {
    userId: ''
};
export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_USER_ID_FILTER':
            return {
                ...state,
                userId: action.userId
            };
        default:
            return state;
    }
};