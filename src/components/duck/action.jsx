import { ADD_STUDENT, EDIT_STUDENT, REMOVE_STUDENT, SEARCH } from "./type";

export const actAddStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student,
    }
}

export const actEditStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        payload: student,
    }
}

export const actRemoveStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id,
    }
}

export const actSearch = (payload) => {
    return {
        type: SEARCH,
        payload
    }
}