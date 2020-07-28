import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import StoreContext from '~/context/StoreContext';
// import { Wrapper } from './styles'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Button from '~/components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  & > * {
    margin-right: 15px;
  }
`;

const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input {
    width: 80px;
    text-align: center;
  }
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 10px;
  }

  .qty-num {
    height: 30px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .qty-button {
    cursor: pointer;
    height: 30px;
    width: 30px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const LineItem = props => {
  const { item } = props;
  const {
    updateLineItem,
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext);
  const [qty, setQty] = useState(item.quantity);

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null;

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null;

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id);
  };

  const handleQtyChange = e => {
    setQty(e.target.value);
    updateLineItem(client, checkout.id, item.id, e.target.value);
    // if (e.target.value < 1) {
    //   removeLineItem(client, checkout.id, item.id)
    // }
  };

  // const handleChange = e => {
  //   const { name, value } = e.target
  //   setData({ ...data, [name]: value })
  // }

  const increaseQtyOne = () => {
    setQty(item.quantity + 1);
    updateLineItem(client, checkout.id, item.id, item.quantity + 1);
  };

  const decreaseQtyOne = () => {
    if (item.quantity === 1) {
      removeLineItem(client, checkout.id, item.id);
    } else {
      setQty(item.quantity - 1);
      updateLineItem(client, checkout.id, item.id, item.quantity - 1);
    }
  };

  console.log(item);
  return (
    // <Wrapper>
    //   {/* {console.log(item)} */}
    //   <Link to={`/product/${item.variant.product.handle}/`}>
    //     {variantImage}
    //   </Link>
    //   <p>
    //     {item.title}
    //     {`  `}
    //     {item.variant.title === !'Default Title' ? item.variant.title : ''}
    //   </p>
    //   {selectedOptions}
    //   {item.quantity}
    //   <Button onClick={handleRemove}>Remove</Button>
    // </Wrapper>
    <Wrapper>
      <TopRow>
        {variantImage}
        <div>
          <p>{item.title}</p>
          <p>{item.variant.title}</p>
        </div>
      </TopRow>
      <BottomRow>
        <Qty>
          <AiOutlineMinusCircle
            className="qty-button"
            onClick={decreaseQtyOne}
          />
          {/* <div className="qty-num">{item.quantity}</div> */}
          <input
            className="qty-input"
            type="number"
            id="qty"
            name="qty"
            min="0"
            step="1"
            onChange={e => handleQtyChange(e)}
            value={qty}
          />
          <AiOutlinePlusCircle
            className="qty-button"
            onClick={increaseQtyOne}
          />
        </Qty>
        <p>$ {item.variant.price}</p>
        <p className="subtotal">
          $ {(item.quantity * item.variant.price).toFixed(2)}
        </p>
      </BottomRow>
    </Wrapper>
  );
};

export default LineItem;
