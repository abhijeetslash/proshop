import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
    try {
        console.log('check')
      dispatch({type:PRODUCT_LIST_REQUEST});
      console.log('I ran')
      const res = await axios.get("/api/products");

      dispatch({type:PRODUCT_LIST_SUCCESS, payload:res.data});
    } catch (err) {
        console.log(err,'check')
      dispatch({type:PRODUCT_LIST_FAIL, payload:err.response.data.msg});
    }
  };


  export const listProductDetails = (id) => async (dispatch) => {
    try {
        console.log('check')
      dispatch({type:PRODUCT_DETAILS_REQUEST});
      console.log('I ran')
      const res = await axios.get(`/api/products/${id}`);

      dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:res.data});
    } catch (err) {
        console.log(err,'check')
      dispatch({type:PRODUCT_DETAILS_FAIL, payload:err.response.data.msg});
    }
  };  