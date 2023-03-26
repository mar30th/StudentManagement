import data from '../data.json'
import {ADD_STUDENT, EDIT_STUDENT, REMOVE_STUDENT, SEARCH} from './type'

const initialState = {
    studentList: data,
    keyword: "",
    studentEdit: null,
}



const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT: {
            const cloneStudentList = [...state.studentList];
            const studentEdit = state.studentEdit;
            if(action.payload.id){
                const index = cloneStudentList.findIndex((student) => student.id === action.payload.id)
                console.log(index);
                if(index != -1) {
                    cloneStudentList[index] = action.payload;
                }
            else{
                const student = {...action.payload}
                cloneStudentList.push(student)
            }}

            state.studentList = cloneStudentList;
            state.studentEdit = null;
            return { ...state };
        };
        case EDIT_STUDENT: {
            state.studentEdit = action.payload;
            return {...state}
        }

        case REMOVE_STUDENT: {
            const cloneStudentList = [...state.studentList];
            const index = cloneStudentList.findIndex((student) => student.id === action.payload)
            if(index != -1){
                cloneStudentList.splice(index,1)
            }

            state.studentList = cloneStudentList;
            return {...state}
        }
        
        case SEARCH: {
            state.keyword = action.payload;
            return {...state}
        }
    
        default:
            return { ...state };
    }
}

export default studentReducer;