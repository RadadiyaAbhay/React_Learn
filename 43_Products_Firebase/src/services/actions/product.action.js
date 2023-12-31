import { CREATEPRODUCTREQ, CREATEPRODUCTREJ, PRODUCTSREJ, PRODUCTSREQ, PRODUCTSRES, SINGLEPRODUCTREQ, SINGLEPRODUCTRES, SINGLEPRODUCTREJ, EDITPRODUCTREJ, EDITPRODUCTREQ, DELETEPRODUCTREQ, DELETEPRODUCTREJ } from "../const"
import { collection, getDocs, addDoc , doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../appConfig"

export const productsReq = () => {
    return {
        type: PRODUCTSREQ
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
export const getProducts = () => {
    return dispatch => {
        let products = [];
        dispatch(productsReq())
        getDocs(collection(db, "products")).then((res) => {
            res.forEach((doc) => {
                let newPro = { id: doc.id, ...doc.data() }
                products = [...products, newPro];
            })
            dispatch(productsRes(products))
        }).catch((err) => {
            dispatch(productsRej(err))
        })
    }
}

export const createproductReq = () => {
    return {
        type: CREATEPRODUCTREQ
    }
}
export const createproductRej = (err) => {
    return {
        type: CREATEPRODUCTREJ,
        payload: err
    }
}
export const createProducts = (data) => {
    return dispatch => {
        dispatch(createproductReq())
        addDoc(collection(db, "products"), data).then(() => {
            dispatch(getProducts())
        }).catch((err) => {
            dispatch(createproductRej(err))
        })
    }
}


export const singleProductReq = () => {
    return {
        type: SINGLEPRODUCTREQ
    }
}

export const singleProductRes = (data) => {
    return {
        type: SINGLEPRODUCTRES,
        payload: data
    }
}

export const singleProductRej = (err) => {
    return {
        type: SINGLEPRODUCTREJ,
        payload: err
    }
}
export const singleGetProduct = (id) => {
    return dispatch => {
        dispatch(singleProductReq())
        getDoc(doc(db, "products", `${id}`)).then((res) => {
            let newPro = { id: res.id, ...res.data() }
            dispatch(singleProductRes(newPro))
        }).catch((err) => {
            dispatch(singleProductRej(err))
        })
    }
}

export const editproductReq = () => {
    return {
        type: EDITPRODUCTREQ
    }
}
export const editproductRej = (err) => {
    return {
        type: EDITPRODUCTREJ,
        payload: err
    }
}
export const editProducts = (data) => {
    return dispatch => {
        dispatch(editproductReq())
        setDoc(doc(db, "products" ,`${data.id}`), data).then(() => {
            dispatch(getProducts())
        }).catch((err) => {
            dispatch(editproductRej(err))
        })
    }
}

export const deleteproductReq = () => {
    return {
        type: DELETEPRODUCTREQ
    }
}
export const deleteproductRej = (err) => {
    return {
        type: DELETEPRODUCTREJ,
        payload: err
    }
}
export const deleteProducts = (data) => {
    return dispatch => {
        dispatch(deleteproductReq())
        deleteDoc(doc(db, "products" ,`${data}`)).then(() => {
            dispatch(getProducts())
        }).catch((err) => {
            dispatch(deleteproductRej(err))
        })
    }
}