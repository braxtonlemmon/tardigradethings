import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import StoreContext from '~/context/StoreContext';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: baseline;
  button {
    align-self: center;
    margin: 15px;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.card};
  width: 100%;
  &:first-child {
    border-bottom: none;
    border-top: 1px solid ${props => props.theme.colors.card};
    padding: 20px 0 0 0;
  }
  label {
    cursor: pointer;
  }
  select {
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.darkLight};
    padding: 5px;
    color: black;
    background: white;
    width: 150px;
    text-align: center;
    cursor: pointer;
  }
  input[type='number'] {
    width: 80px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.darkLight};
  }
  input[type='radio'] {
    cursor: pointer;
  }
  & > * {
    margin-right: 15px;
  }
`;

function ShopFormComponent({
  data,
  handleChange,
  handleSelection,
  product,
  handleAddToCart,
  handleVariantChange,
}) {
  // Pull data/func from context
  const {
    store: { client, adding },
  } = useContext(StoreContext);

  return (
    <Wrapper>
      <Row>
        <input
          checked={data.type === 'once'}
          // onChange={e => handleChange(e)}
          onChange={e => handleSelection(e)}
          type="radio"
          id="once"
          name="type"
          value="once"
        />
        <label htmlFor="once">One-time order</label>
      </Row>
      <Row>
        <input
          checked={data.type === 'subscription'}
          // onChange={e => handleChange(e)}
          onChange={e => handleSelection(e)}
          type="radio"
          id="subscription"
          name="type"
          value="subscription"
        />
        <label htmlFor="subscription">Subscription (save 5%)</label>
      </Row>
      <Row>
        <label htmlFor="shopifyId">Shape:</label>
        <select
          name="shopifyId"
          id="shopifyId"
          value={data.shopifyId}
          onChange={e => {
            handleChange(e);
          }}
        >
          {product.variants.map(variant => (
            <option value={variant.shopifyId}>{variant.title}</option>
          ))}
        </select>
      </Row>
      <Row>
        <label htmlFor="qty">Qty:</label>
        <input
          type="number"
          name="qty"
          id="qty"
          min="1"
          step="1"
          value={data.qty}
          onChange={e => handleChange(e)}
        />
      </Row>
      <Button disabled={adding} onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Wrapper>
  );
}

ShopFormComponent.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  handleSelection: PropTypes.func,
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  handleVariantChange: PropTypes.func,
};

export default ShopFormComponent;
