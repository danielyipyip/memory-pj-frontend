import postReducer from './posts/postReducer'
import {combineReducers} from 'redux'
import postIdReducer from './postId/postIdReducer'

const rootReducer = combineReducers({
    post: postReducer,
    id: postIdReducer
})

export default rootReducer;