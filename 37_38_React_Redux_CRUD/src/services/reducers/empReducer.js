import { CREATEEMP, DELETEEEMP, EDITEEMP, GETDATA, NEWEDITEEMP } from "../const"

const initialState = {
    employees: [],
    employee: null
}

export const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEEMP:
            localStorage.setItem('employees', JSON.stringify([...state.employees, action.payload]));
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
            
        case DELETEEEMP:
            let id = action.payload;
            let newEmp = state.employees.filter((emp) => {
                return id != emp.id;
            })
            localStorage.setItem('employees', JSON.stringify(newEmp));
            return {
                ...state,
                employees: newEmp
            }
        case EDITEEMP:
            let idd = action.payload;
            let emp = state.employees.filter((emp) => {
                return idd == emp.id;
            })
            return {
                ...state,
                employee: emp[0]
            }
        case GETDATA :
            return{
                ...state,
                employees : action.payload
            }

        case NEWEDITEEMP:
            let newData = state.employees.map((emp) => {
                if (action.payload.id == emp.id){
                    return emp = action.payload
                }else{
                    return emp
                }
            })
            localStorage.setItem('employees', JSON.stringify(newData));
            return {
                ...state,
                employees: newData
            }
            
        default:
            return state;
    }
}