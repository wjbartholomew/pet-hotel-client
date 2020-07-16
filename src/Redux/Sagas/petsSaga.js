import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getPets(action) {
    console.log('in submitPet saga', action.payload)
    try {
        const pets = yield axios.get(`/pets`)
        yield put({ type: 'SET_PETS', payload: pets.data })
    } catch (error) {
        console.log('GET FAILED', error)
    }
}

function* submitPet(action) {
    console.log('submitPet action.payload:', action.payload)
    try {
        yield axios.post(`http://147.0.0.1:5000/pet`, action.payload)
        yield put({ type: 'GET_PETS' })
    } catch (error) {
        console.log('SAVE PET FAILED', error)
    }
}

function* deletePet(action) {
    console.log('In deletePet Saga');
    try {
        yield axios.delete(`/pets/${action.payload}`)
        yield put({ type: 'GET_PETS' })
    } catch (error) {
        console.log('DELETE PET FAILED:', error)
    }
}

function* checkIn (action) {
    console.log('In checkIn Saga');
    try {
        yield axios.put(`/pets/${action.payload}`)
        yield put({ type: 'GET_PETS' })
    } catch (error) {
        console.log('CHECK IN PET FAILED:', error)
    }
}

function* checkOut (action) {
    console.log('In checkOut Saga');
    try {
        yield axios.put(`/pets/${action.payload}`)
        yield put({ type: 'GET_PETS' })
    } catch (error) {
        console.log('CHECK OUT PET FAILED:', error)
    }
}




function* petsSaga() {
    yield takeLatest('SUBMIT_PET', submitPet);
    yield takeLatest('GET_PETS', getPets);
    yield takeLatest('DELETE_PET', deletePet);
    yield takeLatest('CHECK_IN', checkIn);
    yield takeLatest('CHECK_OUT', checkOut);

}

export default petsSaga;