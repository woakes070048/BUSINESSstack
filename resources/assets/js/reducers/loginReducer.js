import initialState from '../initialState';

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return state;

    default:
      return state;
  }
}
