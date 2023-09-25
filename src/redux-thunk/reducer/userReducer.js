import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../constant/userConstant";

export const userReducer = (state, actions) => {
  switch (actions.type) {
    case GET_USERS_REQUEST:
      return { loading: true, users: [] };
    case GET_USERS_SUCCESS:
      return { loading: false, users: actions.payload };
    case GET_USERS_FAIL:
      return { loading: false, error: actions.payload };
    default:
      return state;
  }
};
