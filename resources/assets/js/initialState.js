export default {
  commonReducer: {
    Drawer: {
      open: false
    },
    Snackbar: {
      open: false,
      message: '',
    },
    Dialog: {
      open: false
    }
  },
  invoiceReducer: {
    invoices: []
  }
};
