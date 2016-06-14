const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export function beginAjaxCall() {
  return {type: 'BEGIN_AJAX_CALL'};
}

export function ajaxCallError() {
  return {type: 'AJAX_CALL_ERROR'};
}

//
// axios.post(`${ROOT_URL}/login`, { email, password })
//       .then(response => {
//
