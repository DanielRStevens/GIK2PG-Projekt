import './AppProductList.css';
import placeholder from './images/olivia-book-md.png';
import React, {useState} from 'react';

//const fetch = require('node-fetch');
let url = 'http://localhost:4000/getAllProducts';
let settings = {method: 'Get'};

function AppProductList() {

  const [products, setProducts] = useState(null);

  const getAllBooks =  () => {
    fetch(url, settings)
      .then(res=>{
        console.log(res);
        res.json();
      })
      .then(json=>setProducts(json));
  };
// id, imageurl, name, price, author
  getAllBooks();
  return (
    <div className="App-productlist">
        {products && products.map((product) =>
          <div className="App-product">
            <a href={'/product/'+product.Id}>
              <img src={product.ImageUrl?product.ImageUrl:placeholder} alt="" className="App-productimage"/>
              <h2>{product.Name} {product.Price}kr</h2>
              <p>{product.Author}</p>
              <p className="app-productdescription">{product.description}</p>
            </a>
          </div>
        )}
    </div>
  );
}

export default AppProductList;