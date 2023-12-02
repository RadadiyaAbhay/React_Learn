const initialState  = {
    count : 0,
    isEdit : true
} ;

export const counterReducer = (state = initialState , action) => {
    switch(action.type){
        case "INC" :
            return{
                count : state.count+1
            }
            break;
        case "DES" :
            if(state.count >0){
                return{
                    count : state.count-1
                }
            }else{
                return{
                    count : 0
                } 
            }
            break;
        default :
        return state;
    }
}