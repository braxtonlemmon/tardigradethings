import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShopFormComponent from './ShopFormComponent';
import StoreContext from '~/context/StoreContext';
import styled from 'styled-components';
import CartPopup from './CartPopup';

function ShopFormContainer({ products }) {
  const { addVariantToCart } = useContext(StoreContext);
  const [product, setProduct] = useState(products[0].node);
  const [justAdded, setJustAdded] = useState(false);
  const [variant, setVariant] = useState();
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
    setJustAdded(true);
    const selectedVariant = product.variants.find(
      variant => variant.shopifyId === data.shopifyId
    );
    setVariant(selectedVariant);
    addVariantToCart(data.shopifyId, data.qty);
  };

  const handleClose = () => {
    setJustAdded(false);
  };

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   justAdded
  //     ? (body.style.overflow = 'hidden')
  //     : (body.style.overflow = 'visible');
  // }, [justAdded]);

  console.log(product.variants[0].shopifyId);
  return (
    <div>
      <ShopFormComponent
        handleSelection={handleSelection}
        handleChange={handleChange}
        data={data}
        product={product}
        handleAddToCart={handleAddToCart}
      />
      {justAdded && (
        <CartPopup
          handleClose={handleClose}
          qty={data.qty}
          variant={variant}
          product={product}
        />
      )}
    </div>
  );
}

ShopFormContainer.propTypes = {
  products: PropTypes.array,
};

export default ShopFormContainer;
