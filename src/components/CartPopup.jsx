import React, { useContext } from 'react';
import styled from 'styled-components';
import reduce from 'lodash/reduce';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegSmileBeam } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'gatsby';
import StoreContext from '~/context/StoreContext';

const Wrapper = styled.div`
  background: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  background: white;
  border: 1px solid black;
  width: 80%;
  max-width: 700px;
  height: 60%;
  max-height: 600px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    width: 80%;
    max-width: 300px;
  }
  & > * {
    margin-bottom: 15px;
  }
`;

const Close = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  &:hover {
    color: ${props => props.theme.colors.darkLight};
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  #popup-item {
    font-weight: bold;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin-bottom: 5px;
  }
`;

function CartPopup({ handleClose, qty, variant, product }) {
  const useQuantity = () => {
    const {
      store: { checkout },
    } = useContext(StoreContext);
    const items = checkout ? checkout.lineItems : [];
    const total = reduce(items, (acc, item) => acc + item.quantity, 0);
    return [total !== 0, total];
  };

  return (
    <Wrapper onClick={handleClose}>
      <Container>
        <Close size={48} />
        {/* <FaCheck size={70} /> */}
        <FaRegSmileBeam size={70} />
        <Text>
          <p>You just added</p>
          <p id="popup-item">
            "{product.title} ({variant.title.toLowerCase()})"
          </p>
          <p> to your cart! </p>
        </Text>
        <p>Qty: {qty}</p>
        <Buttons>
          <Button onClick={handleClose}>Keep Shopping</Button>
          <p>or</p>
          <Link to="/cart">
            <Button>Go to Cart ({useQuantity()})</Button>
          </Link>
        </Buttons>
      </Container>
    </Wrapper>
  );
}

export default CartPopup;
