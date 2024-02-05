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

export function filterData(){
    let cartData = getData('cart');
    if(cartData == null){
        cartData = {
            isLoading: false,
            err: null,
            cartProduct: {product : []},
        }
    }
    let des = cartData.cartProduct.product.map((pro)=>{
        return pro.id;
    })
    
    var opt = des.filter((o ,index) =>{
       return des.indexOf(o) == index ; 
    })
    return opt;
    
}

export function filterDataColor(data){
    let des = data.map((pro)=>{
        return pro.color;
    })
    
    var opt = des.filter((o ,index) =>{
       return des.indexOf(o) == index ; 
    })
    return opt;
    
}
export function filterDataCategory(data){
    let des = data.map((pro)=>{
        return pro.category;
    })
    
    var opt = des.filter((o ,index) =>{
       return des.indexOf(o) == index ; 
    })
    return opt;
    
}