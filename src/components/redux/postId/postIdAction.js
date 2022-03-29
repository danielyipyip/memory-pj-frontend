import {UPDATE_CURRENT_ID, GET_A_POST, UPDATE_POST} from './postIdType'
import axios from 'axios'

const url='https://memories-practice.herokuapp.com/posts'

export const updateId = (id)=>{
    return {type: UPDATE_CURRENT_ID, payload: id}
}

export const getAPost = (data)=>{
    return {type: GET_A_POST, payload: data}
}

export const getOnePost = (id) =>{
    return (dispatch) =>{
        axios.get(url+'/'+id+'/')
        .then( data => dispatch(getAPost(data.data)) )
        .catch( err => console.log(err) )
    }
}

export const updatePost = (data) =>{
    return {type: UPDATE_POST, payload: data}
}

export const UpdatePost = (id, data) =>{
    return (dispatch) => {
        axios.patch(`${url}/${id}/`, data)
        .then( data => dispatch(updatePost(data.data) ))
        .catch(err => console.log(err))
    }
}