import React, {useState, useEffect} from 'react';
import Product from './Product';

export default function ProductList() {
   let [products, setProducts] = useState([]);

   useEffect(() => {
      // fetch a list of products from the server
      setProducts(products);
   }, [products]);

   return (
      <div className="App">
         <h2>Products</h2>
         {
            products && products.length > 0 ?
               products.map((product) => (<Product key={product.id} product={product} />))
               : ( <p>No products</p>)
         }
      </div>
   );
}