const LOGIN = 'job-network/registration/login';
const LOGOUT = 'job-network/registration/logout';

const initialState = {
  isLoggedIn : false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn : true};
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
