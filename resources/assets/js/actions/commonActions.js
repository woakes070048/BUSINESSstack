export function toggleDrawer() {
  return { type: 'TOGGLE_DRAWER'};
}

export function snackbarMessage(message) {
  return { type: 'SNACKBAR_MESSAGE', message};
}

export function closeSnackbar() {
  return { type: 'CLOSE_SNACKBAR'};
}

export function startLoadingData() {
  return { type: 'START_LOADING_DATA'};
}

export function finishLoadingData(message) {
  return { type: 'FINISH_LOADING_DATA', message};
}
