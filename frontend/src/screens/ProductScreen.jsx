import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {
    Row,
    Col,
    Card,
    Image,
    ListGroup,
    ListGroupItem,
    Button,
    Form
} from "react-bootstrap";

import {listProductDetails} from '../actions/productActions';

import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from "../components/Rating";

const ProductScreen = ({history, match}) => {

    const [ qty, setQty ] = useState(1);

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, reviews, err} = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
        // eslint-disable-next-line
    }, [dispatch, match]);

    const addToCartHandler = (e) => {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    if (loading) {
        return <Loader />
    }

    if (err) {
        return <Message variant={'danger'}> {err} </Message>
    }

    return (
    <>
        <Link to="/" className=" btn btn-dark my-3 ">Go Back</Link>
        <Row className='product-details'>
            <Col md={6}>
                <Image src={
                        product.image
                    }
                    alt={
                        product.name
                    }
                    fluid/> </Col> <Col md = {
            3
        }> <ListGroup variant="flush"> <ListGroupItem> <h3> {
            product.name
    } </h3>
                    </ListGroupItem > <ListGroupItem> < Rating value = {
        product.rating
    }
    text = {
        `${
            product.numReviews
        } reviews`
    } /> </ListGroupItem> < ListGroupItem > Price : $ {
        product.price
    } </ListGroupItem>
                    <ListGroupItem>Description: {
                        product.description
                    }</ListGroupItem > </ListGroup> </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col > <Col> <strong> $ {
        product.price
    } </strong>
                                </Col > </Row> </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Status:</Col > <Col> {
        product.countInStock === 0 ? "Out of Stock" : "In Stock"
    } </Col>
                            </Row > </ListGroupItem>
                            
      {
        product.countInStock > 0 && (
          <ListGroupItem>
            <Row>
              <Col>Qty:</Col>
              <Col>
                <Form.Control as='select' value={qty} onChange={e => setQty(e.target.value)}>
                  {
                    [...Array(product.countInStock).keys()].map(key => {
                        return <option key={key + 1}>{key + 1}</option>
                    })
                  }
                </Form.Control>
              </Col>
            </Row>
          </ListGroupItem>
        )
      }                      
                            
                             < ListGroupItem > <Button className="btn-block" type="button"
                                disabled={
                                    product.countInStock === 0
                            } onClick={addToCartHandler}>
    Add to Cart </Button>
                        </ListGroupItem > </ListGroup> </Card>
            </Col > </Row> </>);
};

export default ProductScreen;
