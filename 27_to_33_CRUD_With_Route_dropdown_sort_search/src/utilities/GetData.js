function GetData() {
    var data1 = JSON.parse(localStorage.getItem('StudentsData'));

    if(!data1){
        return [];
    }else{
        return data1;
    }
}

export function filterData(){
    let stuData = GetData();
    let des = stuData.map((st)=>{
        return st.course;
    })
    
    var opt = des.filter((o ,index) =>{
       return des.indexOf(o) == index ; 
    })
    return opt;
    
}

export default GetData;
