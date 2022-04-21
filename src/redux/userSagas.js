import * as types from "./actionTypes"

import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects"
import { createUserApi, deleteUserApi, loadUsersApi, updateUserApi } from "./api";
import { createUserError, createUserSuccess, deleteUserError, deleteUserSuccess, gqloadUsersSuccess, loadUsersError, loadUsersSuccess, updateUserError, updateUserSuccess } from "./actions";
import useUsers from "../hooks/useUsers";

function* onLoadUsersStartAsync(){
    try {
        const response = yield call(loadUsersApi)
        console.log(response);
        if(response.status === 200) {
            yield delay(500)
            yield put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}

function* onCreateUserStartAsync({payload}){
    try {
        const response = yield call(createUserApi, payload)
        console.log(response);
        if(response.status === 200) {
            yield put(createUserSuccess(response.data))
        }
    } catch (error) {
        yield put(createUserError(error.response.data))
    }
}

function* onDeleteUserStartAsync(userId){
    try {
        const response = yield call(deleteUserApi, userId)
        console.log(response);
        if(response.status === 200) {
            yield delay(500)
            yield put(deleteUserSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data))
    }
}

 function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

 function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onDeleteUser() {
    while(true) {
        const {payload: userId} = yield take(types.DELETE_USER_START)
        yield call(onDeleteUserStartAsync, userId);
    }
}

function* onUpdateUserStartAsync({payload: {id, formValue}}) {
    try {
        const response = yield call(updateUserApi, id, formValue)
        if (response.status ===200) {
            yield put(updateUserSuccess())
        }
    } catch (error) {
        yield put(updateUserError(error.response.data))
    }
}

function* onUpdateUser() {
    // while(true) {
        // const {payload: userId} = yield take(types.DELETE_USER_START)
        yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
    // }
}

// function* gqOnLoadUsersStartAsync(){
//     try {
//         const response = yield call(useUsers)
//         console.log("response", response);
//         if(response.status === 200) {
//             yield delay(500)
//             yield put(gqloadUsersSuccess(response.data))
//         }
//     } catch (error) {
//         yield put(loadUsersError(error.response.data))
//     }
// }

// function* gqOnLoadUsers() {
//     yield takeEvery(types.GQ_CREATE_USER_START, gqOnLoadUsersStartAsync);
// }


const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser) ]

export default function* rootSaga() {
    yield all([...userSagas])
}
