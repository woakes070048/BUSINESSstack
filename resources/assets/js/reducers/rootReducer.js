import {combineReducers} from 'redux';
import commonReducer from './commonReducer';
import loginReducer from './loginReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  commonReducer,
  loginReducer,
  invoiceReducer,
});

export default rootReducer;
