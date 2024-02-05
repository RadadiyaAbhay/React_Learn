import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../appconfig";
import { GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES } from "../const";

export const googleSignInReq = () => {
    return {
        type: GOOGLESIGNINREQ
    }
}
export const googleSignInRes = (data) => {
    return {
        type: GOOGLESIGNINRES,
        payload: data
    }
}
export const googleSignInRej = (err) => {
    return {
        type: GOOGLESIGNINREJ,
        payload: err
    }
}

export const googleSignIn = () => {
    return async dispatch => {
        dispatch(googleSignInReq())
        await signInWithPopup(auth, provider).then((res) => {
            let user = { name: res.user.displayName, img: res.user.photoURL, email: res.user.email }
            dispatch(googleSignInRes(user))
        }).catch((err) => {
            dispatch(googleSignInRej(err))
        })
    }
}
export const signInReq = () => {
    return {
        type: SIGNINREQ
    }
}
export const signInRej = (err) => {
    return {
        type: SIGNINREJ,
        payload: err
    }
}
export const signInRes = () => {
    return {
        type: SIGNINRES
    }
}
export const signInAction = (data) => {
    return async dispatch => {
        dispatch(signInReq())
        await signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
            dispatch(signInRes())
        }).catch((err) => {
            dispatch(signInRej(err))
        })
    }
}
export const signUpReq = () => {
    return {
        type: SIGNUPREQ
    }
}
export const signUpRej = (err) => {
    return {
        type: SIGNUPREJ,
        payload: err
    }
}
export const signUpRes = () => {
    return {
        type: SIGNUPRES
    }
}
export const signUpAction = (data) => {
    return async dispatch => {
        dispatch(signUpReq())
        await createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
            dispatch(signUpRes())
        }).catch((err) => {
            dispatch(signUpRej(err))
        })
    }
}
export const signOutReq = () => {
    return {
        type: SIGNOUTREQ
    }
}
export const signOutRej = (err) => {
    return {
        type: SIGNOUTREJ,
        payload: err
    }
}
export const signOutRes = () => {
    return {
        type: SIGNOUTRES
    }
}
export const signOutAction = () => {
    return async dispatch => {
        dispatch(signOutReq())
        await signOut(auth).then(() => {
            dispatch(signOutRes())
        }).catch((err) => {
            dispatch(signOutRej(err))
        })
    }
}