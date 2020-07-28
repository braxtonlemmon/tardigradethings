import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ShopFormComponent from './ShopFormComponent';
import StoreContext from '~/context/StoreContext';

function ShopFormContainer({ products }) {
  const { addVariantToCart } = useContext(StoreContext);
  const [product, setProduct] = useState(products[0].node);
  const [data, setData] = useState({
    qty: 1,
    shopifyId: product.variants[0].shopifyId,
    type: 'once',
    frequency: '10',
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSelection = e => {
    const { value, name } = e.target;
    if (value === 'once') {
      setProduct(products[0].node);
      setData({
        ...data,
        [name]: value,
        ['shopifyId']: products[0].node.variants[0].shopifyId,
      });
    } else {
      setProduct(products[1].node);
      setData({
        ...data,
        [name]: value,
        ['shopifyId']: products[1].node.variants[0].shopifyId,
      });
    }
  };

  const handleAddToCart = e => {
    e.preventDefault();
    addVariantToCart(data.shopifyId, data.qty);
  };

  console.log(product.variants[0].shopifyId);
  return (
    <ShopFormComponent
      handleSelection={handleSelection}
      handleChange={handleChange}
      data={data}
      product={product}
      handleAddToCart={handleAddToCart}
    />
  );
}

ShopFormContainer.propTypes = {
  products: PropTypes.array,
};

export default ShopFormContainer;
