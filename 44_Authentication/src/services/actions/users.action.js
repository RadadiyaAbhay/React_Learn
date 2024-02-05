import { db } from "../../appconfig"
import { ADDUSERREJ, ADDUSERREQ} from "../const"
import { addDoc, collection } from "firebase/firestore"

export const AddUserReq = () =>{
    return{
        type : ADDUSERREQ,
    }
}
export const AddUserRej = (err) =>{
    return{
        type : ADDUSERREJ,
        payload : err
    }
}
export const AddUser = (data) =>{
    return async dispatch =>{
         dispatch(AddUserReq())
        await addDoc(collection(db, "users"), data).then(() => {
            console.log("user Add Succesfully");
        }).catch((err) => {
            dispatch(AddUserRej(err))
        })
    }  
}