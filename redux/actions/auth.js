import * as types from "../types";
import axios from "axios";


export const loginUserStart = () => ({
    type: types.LOGIN_USER_START,
});

export const loginUserSuccess = (token) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: token
});

export const loginUserFail = (error) => ({
  type: types.LOGIN_USER_FAIL,
  payload: error
});

export const getRolesSuccess = (payload) => ({
  type: types.GET_ROLES_SUCCESS,
  payload,
});


export const registerUserStart = () => ({
  type: types.REGISTER_USER_START,

});
export const registerUserSuccess = (payload) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload
});

export const registerUserFail = (error) => ({
  type: types.REGISTER_USER_FAIL,
  payload: error
});

export const googleSocialLoginStart = () => ({
  type: types.GOOGLE_SOCIAL_LOGIN_START,
});

export const googleSocialLoginSuccess = (payload) => ({
type: types.GOOGLE_SOCIAL_LOGIN_SUCCESS,
payload
});

export const googleSocialLoginFail = (error) => ({
type: types.GOOGLE_SOCIAL_LOGIN_FAIL,
payload: error
});



export const googleLoginInitiate = (token) => {
  return function (dispatch) {
      dispatch(googleSocialLoginStart())
      axios
      .post("http://localhost:5000/api/v1/api/v1/auth/social_login/google",
          {   data  },
      {
          headers: {
              "token": token
          }
      })
      .then((res) => {
              console.log("API Google login params", res.data)
              dispatch(googleSocialLoginSuccess(res.data))
          })
          .catch((error) => dispatch(googleSocialLoginFail(error)))
  }   
}

export const loginInitiate = (email, password) => {
  return function (dispatch) {
      dispatch(loginUserStart());
      axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login', {
          email,
          password,
        })
        .then((res) => {
          console.log("login response", res.data.data);
          dispatch(loginUserSuccess(res.data.data))
        })
        .catch((err) => dispatch(loginUserFail(err.response.data)))
  }
} 

export const fetchRoles = () => (dispatch) => {
  axios
    .get("https://afrilearn-backend-01.herokuapp.com/api/v1/auth/roles")
    .then((res) => {
      console.log("Data from API call ==>", res.data.data);
      dispatch(getRolesSuccess(res.data.data));
    })
    .catch((err) => {
      const erroMesage = err.message;
      console.log(err);
      //   dispatch(fetchBookFailure(erroMesage));
    });
};

export const registerUserInitiate = (
  fullName, 
  email, 
  password, 
  confirmPassword, 
  role, 
  course,
  phoneNumber,
  referral) =>  {
  return function (dispatch) {
      dispatch(registerUserStart())
      axios
      .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/signup',
      {   
        fullName, 
        email, 
        password, 
        confirmPassword, 
        role, 
        course,
        phoneNumber,
        referral
      })
      .then((res) => {
        dispatch(registerUserSuccess(res.data.data))
        console.log("User registration API ==>", res.data.data);
      })
      .catch((err) => {
          dispatch(registerUserFail(err))
      })
  }

}

// export const registerUserInitiate = (
//     fullName, 
//     email, 
//     password, 
//     confirmPassword, 
//     role, 
//     course,
//     phoneNumber,
//     referral
// ) => (dispatch) => {
//   dispatch(registerUserStart())
//   axios
//   .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/signup',
//   {
//     fullName, 
//     email, 
//     password, 
//     confirmPassword, 
//     role, 
//     course,
//     phoneNumber,
//     referral
//   })
//   .then((res) => {
//           registerUserSuccess(res.data.data)
//           console.log("User registration API ==>", res.data.data);
//         })
//         .catch((error) => {
//           console.log("Error registration API ==>", error);
//         })
// }