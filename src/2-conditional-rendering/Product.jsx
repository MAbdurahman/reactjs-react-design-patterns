export default function Product({key, product}) {

   return (
      <div className='product-wrapper' key={product.id}>
         <h4>{product.name}</h4>
      </div>

   );
}