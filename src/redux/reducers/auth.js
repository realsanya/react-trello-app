//---------- ACTIONS ----------
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const SET_IS_VERIFICATION_TOKEN_OK = 'SET_IS_VERIFICATION_TOKEN_OK';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_SURNAME = 'SET_USER_SURNAME';
export const SET_USER_DATE_OF_BIRTH = 'SET_USER_DATE_OF_BIRTH';

const initState = {
  userData: {
    id: null,
    email: null,
    name: null,
    surname: null,
    dateOfBirth: null,
    // role: 'USER',
    // state: null,
  },
  name: '',
  surname: '',
  dateOfBirth: '',
  isAdmin: null,
  loginEmail: '',
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
          isAdmin: action.userData.role === 'ADMIN' ? true : false,
        };
      }
      case SET_LOGIN_EMAIL: {
        return {
          ...state,
          loginEmail: action.email,
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
      case SET_USER_NAME: {
        return {
          ...state,
          name: action.name,
        };
      }
      case SET_USER_SURNAME: {
        return {
          ...state,
          surname: action.surname,
        };
      }
      case SET_USER_DATE_OF_BIRTH: {
        return {
          ...state,
          dateOfBirth: action.dateOfBirth,
        }
      }
      default: {
        return {
          ...state,
        };
      }
    }
};


export const setUserData= (id, email, name, surname, dateOfBirth) => ({
  type: SET_USER_DATA,
  userData: {
    id,
    email,
    name,
    surname,
    dateOfBirth,
    // role,
    // state,
  },
});

export const setLoginEmail = (email) => ({
  type: SET_LOGIN_EMAIL,
  email,
});

export const setLoginPassword= (password) => ({
  type: SET_LOGIN_PASSWORD,
  password,
});


export const setLoginError= (error, isError) => ({
  type: SET_LOGIN_ERROR,
  error,
  isError,
});

export const setIsVerificationTokenOk= (isOk) => ({
  type: SET_IS_VERIFICATION_TOKEN_OK,
  isOk,
});

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  name,
});

export const setUserSurname = (surname) => ({
  type: SET_USER_NAME,
  surname,
});

export const setUserDateOfBirth = (dateOfBirth) => ({
  type: SET_USER_DATE_OF_BIRTH,
  dateOfBirth,
});


export default authReducer;
