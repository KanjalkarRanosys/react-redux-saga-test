import * as types from "./actionTypes"

const initialState ={
    users: [],
    loading: false,
    error: null,
    singleUser: {},
    posts:[]
};

const usersReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.CREATE_USER_START:
        case types.DELETE_USER_START:
        case types.UPDATE_USER_START:
        case types.GQ_UPDATE_USER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: true,
                users: action.payload,
                posts: action.payload
            };
        
        case types.CREATE_USER_SUCCESS:
        case types.UPDATE_USER_SUCCESS:
        case types.GQ_UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                // posts: [...state.posts.posts.data, action.payload ]
            }
        
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((item)=>item.id !== action.payload),
            }

        case types.SELECT_SINGLE_USER:
            return {
                ...state,
                singleUser: action.payload
            }

        case types.LOAD_USERS_ERROR:
        case types.CREATE_USER_ERROR:
        case types.DELETE_USER_ERROR:
        case types.UPDATE_USER_ERROR:
        case types:GQ_UPDATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case types.GQ_CREATE_USER_START:
            return {
                ...state
            }

        case types.GQ_LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        
        default:
            return state;
    }
}

export default usersReducer