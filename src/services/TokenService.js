export const isTokenPresent = () => {
    return getToken() !== null;
};
  
export const setToken = (token) => {
  sessionStorage.setItem("token", token);
};
  
export const getToken = () => {
  return sessionStorage.getItem("token");
};