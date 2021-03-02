import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action, type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signup with email and password

    // if we sign up, modify our state
    // and say that we're authenticated

    // if sign in fails, reflect error message

  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signin with email and password

    // if we sign in, modify our state
    // and say that we're authenticated

    // if sign in fails, reflect error message

  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
