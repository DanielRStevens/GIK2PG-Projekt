/*
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Product (props){
    const {product} =props;
    return (
        <Card>
      <Link to={`/product/${product.Id}`}>
        <img src={product.image} className="card-img-top" alt={product.Name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.Id}`}>
          <Card.Title>{product.Name}</Card.Title>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
    )
}
export default Product;*/