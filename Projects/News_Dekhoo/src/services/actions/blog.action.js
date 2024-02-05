import { CREATEBLOGREQ, CREATEBLOGREJ, BLOGSREJ, BLOGSREQ, BLOGSRES, SINGLEBLOGREQ, SINGLEBLOGRES, SINGLEBLOGREJ, EDITBLOGREJ, EDITBLOGREQ, DELETEBLOGREQ, DELETEBLOGREJ } from "../const"
import { collection, getDocs, addDoc , doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../appConfig"

export const blogsReq = () => {
    return {
        type: BLOGSREQ
    }
}

export const blogsRes = (data) => {
    return {
        type: BLOGSRES,
        payload: data
    }
}

export const blogsRej = (err) => {
    return {
        type: BLOGSREJ,
        payload: err
    }
}
export const getBlogs = () => {
    return dispatch => {
        let blogs = [];
        dispatch(blogsReq())
        getDocs(collection(db, "blogs")).then((res) => {
            res.forEach((doc) => {
                let newPro = { id: doc.id, ...doc.data() }
                blogs = [...blogs, newPro];
            })
            let newBlogsData = blogs.slice().sort((blog1, blog2) => {
                return blog2.uin - blog1.uin;
              });
            dispatch(blogsRes(newBlogsData))
        }).catch((err) => {
            dispatch(blogsRej(err))
        })
    }
}
export const singleBlogReq = () => {
    return {
        type: SINGLEBLOGREQ
    }
}

export const singleBlogRes = (data) => {
    return {
        type: SINGLEBLOGRES,
        payload: data
    }
}

export const singleBlogRej = (err) => {
    return {
        type: SINGLEBLOGREJ,
        payload: err
    }
}
export const singleGetBlog = (id) => {
    return async dispatch => {
        dispatch(singleBlogReq())
        await getDoc(doc(db, "blogs", `${id}`)).then((res) => {
            let newPro = { id: res.id, ...res.data() }
            dispatch(singleBlogRes(newPro));
        }).catch((err) => {
            dispatch(singleBlogRej(err))
        })
    }
}

export const editblogReq = () => {
    return {
        type: EDITBLOGREQ
    }
}
export const editblogRej = (err) => {
    return {
        type: EDITBLOGREJ,
        payload: err
    }
}
export const editBlogs = (data) => {
    return async dispatch => {
        dispatch(editblogReq())
        await setDoc(doc(db, "blogs" ,`${data.id}`), data).then(() => {
            dispatch(getBlogs())
        }).catch((err) => {
            dispatch(editblogRej(err))
        })
    }
}

export const deleteblogReq = () => {
    return {
        type: DELETEBLOGREQ
    }
}
export const deleteblogRej = (err) => {
    return {
        type: DELETEBLOGREJ,
        payload: err
    }
}
export const deleteBlogs = (data) => {
    return dispatch => {
        dispatch(deleteblogReq())
        deleteDoc(doc(db, "blogs" ,`${data}`)).then(() => {
            dispatch(getBlogs())
        }).catch((err) => {
            dispatch(deleteblogRej(err))
        })
    }
}

export const createblogReq = () => {
    return {
        type: CREATEBLOGREQ
    }
}
export const createblogRej = (err) => {
    return {
        type: CREATEBLOGREJ,
        payload: err
    }
}
export const createBlogs = (data) => {
    return async dispatch => {
        dispatch(createblogReq())
        await addDoc(collection(db, "blogs"), data).then(() => {
            dispatch(getBlogs())
        }).catch((err) => {
            dispatch(createblogRej(err))
        })
    }
}
