import {useContext, useState} from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const total = cartList.reduce(
    (sum, eachItem) => sum + eachItem.price * eachItem.quantity,
    0,
  )

  const totalItems = cartList.reduce(
    (sum, eachItem) => sum + eachItem.quantity,
    0,
  )

  const onChangePaymentMethod = event => {
    setPaymentMethod(event.target.value)
  }

  const onConfirmOrder = () => {
    setIsOrderPlaced(true)
  }

  const onClosePopup = () => {
    setPaymentMethod('')
    setIsOrderPlaced(false)
  }

  return (
    <div className="sum-container">
      <div className="summary-card">
        <h1 className="order-total-text">
          Order Total: <span className="total-amount">Rs {total}/-</span>
        </h1>

        <p className="items-count">{cartList.length} Items in cart</p>

        <Popup
          modal
          trigger={
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          }
          onClose={onClosePopup}
        >
          {close => (
            <div className="payment-popup">
              {isOrderPlaced ? (
                <div className="success-container">
                  <h1 className="success-heading">Order Successful!</h1>
                  <p className="success-message">
                    Your order has been placed successfully
                  </p>
                  <button
                    type="button"
                    className="confirm-order-btn"
                    onClick={() => {
                      onClosePopup()
                      close()
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="payment-heading">Payment</h1>

                  <h2 className="payment-subheading">Select Payment Method</h2>

                  <div className="payment-methods">
                    <label className="payment-option disabled-option">
                      <input type="radio" name="payment" disabled />
                      Card
                    </label>

                    <label className="payment-option disabled-option">
                      <input type="radio" name="payment" disabled />
                      Net Banking
                    </label>

                    <label className="payment-option disabled-option">
                      <input type="radio" name="payment" disabled />
                      UPI
                    </label>

                    <label className="payment-option disabled-option">
                      <input type="radio" name="payment" disabled />
                      Wallet
                    </label>

                    <label className="payment-option">
                      <input
                        type="radio"
                        name="payment"
                        value="COD"
                        checked={paymentMethod === 'COD'}
                        onChange={onChangePaymentMethod}
                      />
                      Cash on Delivery
                    </label>
                  </div>

                  <div className="payment-summary">
                    <h2>Order Summary</h2>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: Rs {total}/-</p>
                  </div>

                  <button
                    type="button"
                    className="confirm-order-btn"
                    disabled={paymentMethod !== 'COD'}
                    onClick={onConfirmOrder}
                  >
                    Confirm Order
                  </button>

                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default CartSummary
