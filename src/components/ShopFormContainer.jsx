import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ShopFormComponent from './ShopFormComponent';
import StoreContext from '~/context/StoreContext';
import CartPopup from './CartPopup';

function ShopFormContainer({ productOptions }) {
  const products = {
    once: productOptions.find(
      product =>
        product.node.shopifyId ===
        'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0MDQ3NjY1Njg2MTA='
    ).node,
    subscription: productOptions.find(
      product =>
        product.node.shopifyId ===
        'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0ODc5MTk0NjQ2MTA='
    ).node,
  };
  // console.log(products.once.title);
  const { addVariantToCart } = useContext(StoreContext);
  const [product, setProduct] = useState(products.once);
  const [justAdded, setJustAdded] = useState(false);
  const [variant, setVariant] = useState();
  const [data, setData] = useState({
    qty: 1,
    shopifyId: product.variants[1].shopifyId,
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
      setProduct(products.once);
      setData({
        ...data,
        [name]: value,
        ['shopifyId']: products.once.variants[0].shopifyId,
      });
    } else {
      setProduct(products.subscription);
      setData({
        ...data,
        [name]: value,
        ['shopifyId']: products.subscription.variants[0].shopifyId,
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
