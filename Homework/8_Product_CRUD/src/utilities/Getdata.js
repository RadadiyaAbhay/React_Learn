function Getdata(){
    let data1 = JSON.parse(localStorage.getItem('products'));

    if(!data1){
        return [];
    }else{
        return data1;
    }
}
export default Getdata;