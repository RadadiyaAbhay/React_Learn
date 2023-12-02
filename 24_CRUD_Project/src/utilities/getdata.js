var getdata = () => {
    var data = JSON.parse(localStorage.getItem('studentDetails'));

        if(data != null){
            return data;
        }
        else{
            return [];
        }
    }

export default getdata;