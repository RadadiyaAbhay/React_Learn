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
            let newProductsData = products.slice().sort((product1, product2) => {
                return product2.uin - product1.uin;
              });
            dispatch(productsRes(newProductsData))
        }).catch((err) => {
            dispatch(productsRej(err))
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
    return async dispatch => {
        dispatch(singleProductReq())
        await getDoc(doc(db, "products", `${id}`)).then((res) => {
            let newPro = { id: res.id, ...res.data() }
            dispatch(singleProductRes(newPro));
        }).catch((err) => {
            dispatch(singleProductRej(err))
        })
    }
}
