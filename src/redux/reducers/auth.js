//---------- ACTIONS ----------
export const SET_USER_DATA = 'SET_LOGIN_EMAIL';
// export const setUserData= (id, email, role, state) => ({
export const setUserData= (email) => ({
  type: SET_USER_DATA,
  userData: {
    // id,
    email,
    // role,
    // state,
  },
});

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const setLoginEmail = (email) => ({
  type: SET_LOGIN_EMAIL,
  email,
});

export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const setLoginPassword= (loginPassword) => ({
  type: SET_LOGIN_PASSWORD,
  loginPassword,
});

export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const setLoginError= (error, isError) => ({
  type: SET_LOGIN_ERROR,
  error,
  isError,
});

export const SET_IS_VERIFICATION_TOKEN_OK = 'SET_IS_VERIFICATION_TOKEN_OK';
export const setIsVerificationTokenOk= (isOk) => ({
  type: SET_IS_VERIFICATION_TOKEN_OK,
  isOk,
});

const initState = {
    userData: {
      id: null,
      email: null,
      // role: 'USER',
      // state: null,
    },
    isAdmin: null,
    email: '',
    loginPassword: '',
    isError: null,
    error: null,
    isOk: null,
};

//---------- REDUCER ----------

const authReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_USER_DATA: {
        return {
          ...state,
          userData: { ...action.userData },
          // isAdmin: action.userData.role === 'ADMIN' ? true : false,
        };
      }
      case SET_LOGIN_EMAIL: {
        return {
          ...state,
          email: action.email,
        };
      }
      case SET_LOGIN_PASSWORD: {
        return {
          ...state,
          loginPassword: action.password,
        };
      }
      case SET_LOGIN_ERROR: {
        return {
          ...state,
          isError: action.isError,
          error: action.error,
        };
      }
      case SET_IS_VERIFICATION_TOKEN_OK: {
        return {
          ...state,
          isOk: action.isOk,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
};


export default authReducer;
