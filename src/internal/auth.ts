const TYPE_LOGIN = 'LOGIN';
const TYPE_LOGOUT = 'LOGOUT';
const TYPE_REGISTER = 'REGISTER';

interface User {
  email: string;
  password: string;
}

type ActionAuth =
  | { type: typeof TYPE_LOGIN }
  | { type: typeof TYPE_LOGOUT }
  | { type: typeof TYPE_REGISTER; payload: User };

interface TypeState {
  users: { [email: string]: string };
  isLoggedIn: boolean;
}

export const authReducer = (
  state: TypeState = { users: {}, isLoggedIn: false },
  action: ActionAuth,
) => {
  switch (action.type) {
    case TYPE_LOGIN:
      return { ...state, isLoggedIn: true };

    case TYPE_LOGOUT:
      return { ...state, isLoggedIn: false };

    case TYPE_REGISTER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.email]: action.payload.password,
        },
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export const signin = () => ({ type: TYPE_LOGIN });
export const logout = () => ({ type: TYPE_LOGOUT });
export const register = (user: User) => ({
  type: TYPE_REGISTER,
  payload: user,
});
