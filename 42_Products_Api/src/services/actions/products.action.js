import axios from "axios"
import { CREATEPRODUCTSREJ, CREATEPRODUCTSREQ, DELETEPRODUCTSREJ, DELETEPRODUCTSREQ, DONEEDITPRODUCTSREJ, DONEEDITPRODUCTSREQ, EDITPRODUCTSREJ, EDITPRODUCTSREQ, EDITPRODUCTSRES, PRODUCTSREJ, PRODUCTSREQ, PRODUCTSRES } from "../const"

export const productsReq = () => {
    return {
        type: PRODUCTSREQ,
    }
}

export const productsRes = (data) => {
    return {
        type: PRODUCTSRES,
        payload: data
    }
}

export const productsRej = (err) => {
    return {
        type: PRODUCTSREJ,
        payload: err
    }
}
export const showProducts = () => {
    return dispatch => {
        dispatch(productsReq())
        axios.get('http://localhost:3000/products').then((data) => { dispatch(productsRes(data.data)) }).catch((err) => { dispatch(productsRej(err.message)) })
    }
}


export const deleteProductsReq = () => {
    return {
        type: DELETEPRODUCTSREQ
    }
}
export const deleteProductsRej = (err) => {
    return {
        type: DELETEPRODUCTSREJ,
        payload: err
    }
}
export const deleteProducts = (id) => {
    return dispatch => {
        dispatch(deleteProductsReq())
        axios.delete(`http://localhost:3000/products/${id}`).then(() => { dispatch(showProducts()) }).catch((err) => { dispatch(deleteProductsRej(err.message)) })
    }
}

export const editProductsReq = () => {
    return {
        type: EDITPRODUCTSREQ,
    }
}

export const editProductsRes = (data) => {
    return {
        type: EDITPRODUCTSRES,
        payload: data
    }
}

export const editProductsRej = (err) => {
    return {
        type: EDITPRODUCTSREJ,
        payload: err
    }
}
export const editProducts = (id) => {
    return dispatch => {
        dispatch(editProductsReq())
        axios.get(`http://localhost:3000/products/${id}`).then((data) => { dispatch(editProductsRes(data.data))}).catch((err) => { dispatch(editProductsRej(err.message)) })
    }
}
 
export const doneEditProductsReq = () => {
    return {
        type: DONEEDITPRODUCTSREQ
    }
}

export const doneEditProductsRej = (err) => {
    return {
        type: DONEEDITPRODUCTSREJ,
        payload: err
    }
}
export const doneEditProducts = (id, data) => {
    return dispatch => {
        dispatch(doneEditProductsReq())
        axios.put(`http://localhost:3000/products/${id}`, data).then(() => { dispatch(showProducts()) }).catch((err) => { dispatch(doneEditProductsRej(err.message)) })
    }
}
export const createProductsReq = () => {
    return {
        type: CREATEPRODUCTSREQ
    }
}

export const createProductsRej = (err) => {
    return {
        type: CREATEPRODUCTSREJ,
        payload: err
    }
}
export const createProducts = (data) => {
    return dispatch => {
        dispatch(createProductsReq())
        axios.post(`http://localhost:3000/products`, data).then(() => { dispatch(showProducts()) }).catch((err) => { dispatch(createProductsRej(err.message)) })
    }
}