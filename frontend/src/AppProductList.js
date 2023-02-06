import './AppProductList.css';
import placeholder from './images/olivia-book-md.png';
import React, {useState} from 'react';
function AppProductList() {

  const [products, setProducts] = useState([
    {id:1, name:'book1', author:'author1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price:1.1, imageurl:null},
    {id:2, name:'book2', author:'author2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price:2.2, imageurl:null}
  ]);

  return (
    <div className="App-productlist">
        {products && products.map((product) =>
          <div className="App-product">
            <a href={'/product/'+product.id}>
              <img src={product.imageurl?product.imageurl:placeholder} alt="" className="App-productimage"/>
              <h2>{product.name} {product.price}kr</h2>
              <p>{product.author}</p>
              <p className="app-productdescription">{product.description}</p>
            </a>
          </div>
        )}
    </div>
  );
}

export default AppProductList;