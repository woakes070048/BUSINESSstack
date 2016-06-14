import initialState from '../initialState';

const actionsMap = {
  ['LOAD_INVOICES_SUCCESS'](state, action) {
    return Object.assign({}, {invoices: action.invoices});
  },
};

export default function invoices(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
