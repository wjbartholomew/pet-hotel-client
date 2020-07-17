import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getOwners(action) {
  console.log("in getOwners saga", action.payload);
  try {
    const owners = yield axios.get(`http://127.0.0.1:5000/owner`);
    yield put({ type: "SET_OWNERS", payload: owners });
  } catch (error) {
    console.log("GET FAILED", error);
  }
}

function* submitOwner(action) {
  console.log("save owners to database");
  console.log("action.payload:", action.payload);
  try {
    yield axios.post(`http://127.0.0.1:5000/owner`, action.payload);
    yield put({ type: "GET_OWNERS" });
  } catch (error) {
    console.log("OWNER POST FAILED", error);
  }
}

function* deleteOwner(action) {
  console.log("In deleteOwner Saga");
  console.log(action.payload);
  const ownerId = { key: action.payload };
  console.log(ownerId);

  try {
    yield axios.delete(`http://127.0.0.1:5000/owner`, { data: ownerId });
    yield put({ type: "GET_OWNERS" });
  } catch (error) {
    console.log("DELETE OWNER FAILED:", error);
  }
}

function* ownersSaga() {
  yield takeLatest("GET_OWNERS", getOwners);
  yield takeLatest("SUBMIT_OWNER", submitOwner);
  yield takeLatest("DELETE_OWNER", deleteOwner);
}

export default ownersSaga;
