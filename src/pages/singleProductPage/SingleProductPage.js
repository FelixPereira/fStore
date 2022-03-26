import React from  'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { selectShopProduct } from '../../redux/shop/shopSelector';

const SingleProductPage = () => {
  const { categoryUrl, productUrl } = useParams();
  const shopProduct = useSelector(selectShopProduct(categoryUrl, productUrl));
 
  console.log(shopProduct);

  return(
    <div className='single-product-page'>
      <div>
        <img src={`${shopProduct.productImage}`} alt={`${shopProduct.name}`} />
      </div>
      
      <div className='product-info'>
        <h1>{shopProduct.name}</h1>
        <div>
          <h3>{shopProduct.price}</h3>
          <div>
            <div>-</div>
            <div>{shopProduct.quantity}</div>
            <div>+</div>
            <div>Add to cart buttom</div>
            <div>Add to wishlist</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleProductPage;