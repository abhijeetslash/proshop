import React, { useEffect, Fragment } from "react";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";


import Message from "../components/Message";


const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { products, loading, err } = productList;

  useEffect(() => {
    dispatch(listProducts());
    // eslint-disable-next-line
  }, [dispatch]);

  if(loading){
    return <Loader/>
  }

  if(err){
  return <Message variant={'danger'}>{err}</Message>
  }

  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
