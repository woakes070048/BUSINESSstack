import initialState from '../initialState';

const actionsMap = {
  ['TOGGLE_DRAWER'](state, action) {
    let newState = Object.assign({}, state, {Drawer:{open: !state.Drawer.open}});
    console.log(newState);
    return newState;
  },
  ['CLOSE_SNACKBAR'](state, action) {
    return Object.assign({}, state, {
      Snackbar:{
        open: false,
        message: ''
      }
    });
  },
  ['START_LOADING_DATA'](state, action) {
    return Object.assign({}, state, {Dialog:{open: true}});
  },
  ['FINISH_LOADING_DATA'](state, action) {
    let newState = Object.assign({}, state, {
      Snackbar:{message: action.message, open: true},
      Dialog:{open: false}
    });
    console.log(newState);
    return newState;
  },
};

export default function common(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
