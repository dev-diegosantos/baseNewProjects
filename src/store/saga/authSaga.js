import { takeLatest, put } from "redux-saga/effects";
import { Types } from "../ducks/auth";
import { POST, GET } from "../../utils/constants/verbs";
import requestAPI from "../../helpers/requestHelpers";
import { AUTH_USER } from "../../utils/constants/endpoints";
import { history } from "../../utils/routers";
import urls from "../../utils/constants/urls";
import API from "../../utils/API";

function* requestAuth({ payload }) {
  console.log("payload", payload);
  try {
    const body = {
      email: payload.email,
      password: payload.password
    };
    const { data } = yield requestAPI({
      verb: POST,
      endpoint: AUTH_USER,
      data: body
    });
    Object.assign(API.defaults, {
      headers: { Authorization: `Bearer ${data.token}` }
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.id);
    history.push(`${urls.LINKS.APP}`);
  } catch (error) {
    console.log(error);
    yield put({
      type: Types.USER_AUTH_FAIL,
      ...error.response.data,
      isLoading: false
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.USER_AUTH_REQUEST, requestAuth);
}
