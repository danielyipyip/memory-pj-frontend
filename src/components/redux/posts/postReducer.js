import {fetchPost, fetchSuccess, fetchError, createPost} from './postAction'
import {FETCH_POST, CREATE_POST, CREATE_SUCCESS, UPDATE_POST, DELETE_POST, FETCH_SUCCESS, FETCH_ERROR, LIKE_POST} from './postType'


const initialState = {
    loading: false, 
    data: [], 
    error: ''
}

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_POST:
            console.log('loading');
            return {...state, loading: true}
        case FETCH_SUCCESS: 
            console.log('fetched');
            return {...state, loading: false, data: action.payload, error: ''}
        case FETCH_ERROR: 
            console.log('error');
            return {...state, loading: false, error: action.payload}
        case CREATE_POST: 
            return {...state, loading: true, error: ''}
        case CREATE_SUCCESS:
            return {...state, loading: false}
        case DELETE_POST:
            return {...state, data: state.data.filter(post=>post._id!=action.payload)}
        case LIKE_POST:
            return {...state, data: state.data.map(post=> post._id==action.payload.id? action.payload.data: post) }
        default:
            return state
    }
}

export default reducer;