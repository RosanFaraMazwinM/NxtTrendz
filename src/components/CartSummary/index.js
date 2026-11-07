import CartContext from '../../context/CartContext'
import './index.css'
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const total = cartList.reduce(
        (sum, eachItem) => sum + eachItem.price * eachItem.quantity,
        0,
      )

      return (
        <div className="sum-container">
          <div className="summary-card">
            <h1 className="order-total-text">
              Order Total: <span className="total-amount">Rs {total}/-</span>
            </h1>

            <p className="items-count">{cartList.length} Items in cart</p>

            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
