import { doc, getDoc, setDoc } from "firebase/firestore"
import { CARTREJ, CARTREQ, CARTRES, GETCARTREJ, GETCARTREQ, GETCARTRES, SIGNOUTCARTRES } from "../const"
import { db } from "../../appConfig"

export const cartReq = () => {
    return {
        type: CARTREQ
    }
}

export const cartRes = (data) => {
    return {
        type: CARTRES,
        payload: data
    }
}

export const cartRej = (err) => {
    return {
        type: CARTREJ,
        payload: err
    }
}
export const setCart = (pid, uid) => {
    console.log(pid ,uid);
    return dispatch => {
        dispatch(cartReq())
        
        setDoc(doc(db, "cart" , uid),pid).then(() => {
            dispatch(cartRes(pid))
        }).catch((err) => {
            dispatch(cartRej(err))
        })
    }
}
export const signOutCartRes = () => {
    return {
        type: SIGNOUTCARTRES,
        payload: {product : []}
    }
}
export const signOutCart = () => {
    return dispatch => {
        dispatch(signOutCartRes())
    }
}
export const getCartReq = () => {
    return {
        type: GETCARTREQ
    }
}

export const getCartRes = (data) => {
    return {
        type: GETCARTRES,
        payload: data
    }
}

export const getCartRej = (err) => {
    return {
        type: GETCARTREJ,
        payload: err
    }
}
export const getCart = (uid) => {
    return dispatch => {
        dispatch(getCartReq())
        
        getDoc(doc(db, "cart" , uid)).then((res) => {
            if(res.data() == undefined){
                console.log("i am undifined");
                dispatch(getCartRes({product : []}))
            }else{
                console.log("i am difined");
                dispatch(getCartRes(res.data()))
            }
        }).catch((err) => {
            dispatch(getCartRej(err))
        })
    }
}