import {UPDATE_CURRENT_ID, GET_A_POST, UPDATE_POST} from './postIdType'

const initialId={id: 0, data: {creator: '', title: '', message: '', tags: '', selectedFile: '',}};

const reducer = (status=initialId, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_ID:
            return {...status, id:action.payload}
        case GET_A_POST:
            return {...status, data: action.payload}
        case UPDATE_POST:
            return {...status, id: initialId.id, data: ''}
        default:
            return status
    }
}

export default reducer