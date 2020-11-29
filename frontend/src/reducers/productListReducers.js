import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

const productListState = {
  products: [],
  loading: false,
  err: null,
};

export const productListReducer = (state = productListState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }

    case PRODUCT_LIST_FAIL: {
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

const productDetailsState = {
  product: {},
  reviews: [],
  err: null,
  loading: false
}

export const productDetailsReducer = (state = productDetailsState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    }

    case PRODUCT_DETAILS_FAIL: {
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};



