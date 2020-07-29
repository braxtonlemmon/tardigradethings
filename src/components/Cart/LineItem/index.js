import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import StoreContext from '~/context/StoreContext';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: transform 400ms cubic-bezier(1, 0.06, 0.44, 0.96);
  transform: ${props =>
    props.isClosed ? 'translateX(300%)' : 'translateX(0)'};
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

const Close = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  &:hover {
    color: ${props => props.theme.colors.darkLight};
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
  const [isClosed, setClosed] = useState(false);

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

  const handleRemove = async () => {
    setClosed(true);
  };

  useEffect(() => {
    if (isClosed) {
      setTimeout(removeLineItem(client, checkout.id, item.id), 1500);
    }
  }, [isClosed]);

  const handleQtyChange = e => {
    setQty(e.target.value);
    updateLineItem(client, checkout.id, item.id, e.target.value);
  };

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

  return (
    <Wrapper isClosed={isClosed}>
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
      <Close size={30} onClick={handleRemove} />
    </Wrapper>
  );
};

export default LineItem;
