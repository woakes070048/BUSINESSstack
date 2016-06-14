import {REST_URL} from '../constants';

import axios from 'axios';
import * as common from './commonActions';

export function loadInvoicesSuccess(invoices) {
  return function(dispatch) {
  dispatch(common.finishLoadingData('Invoices successfully loaded'));
  dispatch({ type: 'LOAD_INVOICES_SUCCESS', invoices});
  }
}

export function createInvoiceSuccess(invoice) {
  return {type: 'CREATE_INVOICE_SUCCESS', invoice};
}

export function updateInvoiceSuccess(invoice) {
  return {type: 'UPDATE_INVOICE_SUCCESS', invoice};
}

export function loadInvoices() {
  return function(dispatch) {
    dispatch(common.startLoadingData());
    return axios.get(`${REST_URL}/todos`).then(invoices => {
      dispatch(loadInvoicesSuccess(invoices.data));
    }).catch(error => {
      throw(error);
    });
  };
}

// export function saveInvoice(invoice) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return InvoiceApi.saveInvoice(Invoice).then(Invoice => {
//       Invoice.id ? dispatch(updateInvoicesuccess(Invoice)) :
//         dispatch(createInvoicesuccess(Invoice));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }
