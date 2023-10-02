import { useState } from 'react'
import useCart from '../hooks/useCart'
import CartLineItem from './CartLineItem'

const Card = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }

  const pageContent = confirm ? <h2 style={{margin: "16px"}}>Thank you for the order</h2> : <>   
    <div  className="main main__cart">
      <h2 className="offscreen">Cart</h2>
      <ul className='cart'>{cart.map(item => {
        return (
          <CartLineItem key={item.sku} item={item} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} />
        )
      })}</ul>
    </div>
    <div className="cart__totals">
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
        Place Order
      </button>
    </div>
  </>

  const content = (
    <main>
      {pageContent}
    </main>
  )

  return content
}

export default Card