import axios from "axios"
import { ALBUMREJ, ALBUMREQ, ALBUMSUC } from "../const";


export const albumReq = () => {
    return{
        type : ALBUMREQ
    }
}

export const albumSuc = (data) => {
    return{
        type : ALBUMSUC,
        payload : data
    }
}

export const albumRej = (err) => {
    return{
        type : ALBUMREJ
    }
}

export const albumAction = () => {
    return dispatch => {
        dispatch(albumReq())
        axios.get('https://jsonplaceholder.typicode.com/albums').then((data)=>{
            dispatch(albumSuc(data.data));
        }).catch((err)=>{
            dispatch(albumRej(err));
        })
    }
}