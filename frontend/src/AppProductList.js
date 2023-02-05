import './AppProductList.css';
import React, {useState} from 'react';
function AppProductList() {

  const [products, setProducts] = useState([
    {id:1, name:'book1', author:'author1', description:'desc1', price:1.1, imageurl:null},
    {id:2, name:'book2', author:'author2', description:'desc2', price:2.2, imageurl:null}
  ]);

  return (
    <div class="App-productlist">
        {products && products.map((product) =>
          <div class="App-product">
            <a href={'/product/'+product.id}>
              <img src={product.imageurl} alt=""/>
              <b>{product.name} {product.price}kr</b>
              <p>{product.author}</p>
              <p class="app-productdescription">{product.description}</p>
            </a>
          </div>
        )}
    </div>
  );
}

export default AppProductList;