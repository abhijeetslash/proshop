<> <Link to="/" className=" btn btn-dark my-3 "> Go Back < /Link>
        <Row className='product-details'>
            <Col md={6}>
                <Image src={
                        product.image
                    }
                    alt={
                        product.name
                    }
                    fluid/ > </Col> < Col md = {
    3
} > <ListGroup variant="flush"> < ListGroupItem > <h3> {
    product.name
}
</h3></ListGroupItem> < ListGroupItem > < Rating value = {
    product.rating
}
text = {
    `${
        product.numReviews
    } reviews`
} /> </ListGroupItem>< ListGroupItem > Price : $ {
    product.price
}
</ListGroupItem>< ListGroupItem > Description : {
    product.description
} < /ListGroupItem > </ListGroup > </Col>< Col md = {
    3
} > <Card>
    <ListGroup variant="flush">
        <ListGroupItem>
            <Row>
                <Col>Price:</Col>
                <Col>
                    <strong>
                        $ {
                        product.price
                    } </strong>
                </Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem>
            <Row>
                <Col>Status:</Col>
                <Col> {
                    product.countInStock < 0 ? "Out of Stock" : "In Stock"
                } </Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem>
            <Button className="btn-block" type="button"
                disabled={
                    product.countInStock === 0
            }>
                Add to Cart
            </Button>
        </ListGroupItem>
    </ListGroup>
</Card> < /Col> < /Row > </>
