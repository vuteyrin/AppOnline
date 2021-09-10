export const initialState = {
  language: true,
  customer: [],
  item : [],
  store: [],
  paymentmethod: [],
};

export const actionTypes = {
  LANGUAGE: "LANGUAGE",
  CUSTOMER: "CUSTOMER",
  ITEM: "ITEM",
  STORE: "STORE",
  PAYMENTMETHOD: "PAYMENTMETHOD"
};

const reducer = (state, action) => {
  switch (action.type) {
      case actionTypes.LANGUAGE:
        return {
          ...state,
          language: action.language,
        };
      case actionTypes.CUSTOMER:
        return {
          ...state,
          customer: action.customer,
        };
      case actionTypes.ITEM:
          return {
            ...state,
            item: action.item,
          };
      case actionTypes.STORE:
          return {
            ...state,
          store: action.store,
        };
        case actionTypes.PAYMENTMETHOD:
          return {
            ...state,
          paymentmethod: action.paymentmethod,
        };
    default:
      return state;
  }
};

export default reducer;
