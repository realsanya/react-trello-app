//---------- ACTIONS ----------
export const SET_EMAIL = 'SET_EMAIL';
export const setEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword = (password) => ({
  type: SET_PASSWORD,
  password,
});

export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  confirmPassword,
});

export const SET_NAME = 'SET_NAME';
export const setName = (name) => ({
  type: SET_NAME,
  name,
});

export const SET_SURNAME = 'SET_SURNAME';
export const setSurname = (surname) => ({
  type: SET_SURNAME,
  surname,
});

export const SET_DATE_OF_BIRTH = 'SET_DATE_OF_BIRTH';
export const setDateOfBirth = (dateOfBirth) => ({
  type: SET_DATE_OF_BIRTH,
  dateOfBirth,
});

export const SET_ERROR = 'SET_ERROR';
export const setError = (error, isError) => ({
  type: SET_ERROR,
  error,
  isError,
});

export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
export const setSuccessMessage = (successMessage) => ({
  type: SET_SUCCESS_MESSAGE,
  successMessage,
});


const initState = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  surname: '',
  dateOfBirth: '',
  isError: false,
  error: null,
  successMessage: null,
};

//---------- REDUCER ----------

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SET_CONFIRM_PASSWORD: {
      return {
        ...state,
        confirmPassword: action.confirmPassword,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case SET_SURNAME: {
      return {
        ...state,
        surname: action.surname,
      };
    }
    case SET_DATE_OF_BIRTH: {
      return {
        ...state,
        dateOfBirth: action.dateOfBirth,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isError: action.isError,
        error: action.error,
      };
    }
    case SET_SUCCESS_MESSAGE: {
      return {
        ...state,
        successMessage: action.successMessage,
      };
    }
    default: {
      return state;
    }
  }
}


export default registerReducer;