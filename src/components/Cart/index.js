import React, { useContext } from 'react'
import styled from 'styled-components'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

import Button from '~/components/Button'

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-end;
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

  return (
    <Wrapper>
      {lineItems}
      <Price>
        <h2>Subtotal</h2>
        <p>$ {checkout.subtotalPrice}</p>
      </Price>
      {/* <br />
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br /> */}
      {/* <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br /> */}
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

export default Cart
