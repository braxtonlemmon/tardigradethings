import React, { useContext } from 'react'
import styled from 'styled-components'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { FaDog } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'
import { Link } from 'gatsby'
import Button from '~/components/Button'

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-end;
  .subtotal {
    font-weight: bold;
  }
  .subtotal-label {
    display: flex;
    & > * {
      margin-right: 10px;
    }
  }
`

const SadWrapper = styled(Wrapper)`
  align-items: center;
  p {
    text-align: center;
    width: 70%;
    line-height: 1.5em;
  }
  & > * {
    margin-bottom: 15px;
  }
`

const Price = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`

const ExtraInfo = styled.p`
  width: 80%;
  font-size: 14px;
  text-align: right;
  margin-bottom: 15px;
`

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  if (lineItems.length < 1) {
    return (
      <SadWrapper>
        <FaDog size={150} />
        <p>
          Oh no! There are no peanut butter treats in your cart. Time to fix
          that!
        </p>
        <Link to="/shop">
          <Button>SHOP</Button>
        </Link>
      </SadWrapper>
    )
  } else {
    return (
      <Wrapper>
        {lineItems}
        <Price>
          <div className="subtotal-label">
            <h2>Subtotal</h2>
            <GrMoney />
          </div>
          <p className="subtotal">$ {checkout.subtotalPrice}</p>
        </Price>
        <ExtraInfo>Taxes and Shipping calculated at checkout</ExtraInfo>
        <Button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </Button>
      </Wrapper>
    )
  }
}

export default Cart
