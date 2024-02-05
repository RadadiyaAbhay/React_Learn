export function getData(itemname) {
    const data = JSON.parse(sessionStorage.getItem(itemname))
    if(data == null){
        return null;
    }else{
        return data;
    }
}


export const setData = (item, data) => {
    sessionStorage.setItem(item, JSON.stringify(data))
}
