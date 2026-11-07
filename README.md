# Nxt Trendz #

Live Link: https://nxttrndzweb.ccbp.tech/

A React-based e-commerce application enhanced with a payment popup feature. Users can browse products, add items to their cart, view their order summary, and confirm orders using Cash on Delivery.

## 🚀 Features

### Existing Nxt Trendz Features
- User login and authentication.
- Browse products.
- Search products.
- Sort products by price.
- Filter products by category and rating.
- Add products to cart.
- Increase and decrease product quantities.
- Remove products from cart.

### New Payment Features
- Payment popup displayed when clicking the Checkout button.
- Multiple payment methods displayed:
  - Credit / Debit Card
  - Net Banking
  - UPI
  - Wallet
  - Cash on Delivery
- Cash on Delivery is the only enabled payment method.
- Other payment methods are disabled.
- Dynamic order summary displaying total items and total price.
- Confirm Order button enabled only when Cash on Delivery is selected.
- Order success message:

  **Your order has been placed successfully**

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Context API
- React Router
- React Popup (`reactjs-popup`)
- REST API

## 📂 Project Structure

```text
enhancementOfNxtTrendzPayment/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   ├── CartSummary/
│   │   ├── CartItem/
│   │   ├── Header/
│   │   ├── ProductCard/
│   │   └── ...
│   ├── context/
│   │   └── CartContext.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project folder:

```bash
cd enhancementOfNxtTrendzPayment
```

3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

5. Open your browser at:

```text
http://localhost:3000
```

## 💳 Payment Workflow

1. Add products to the shopping cart.
2. Navigate to the cart page.
3. Click the Checkout button.
4. Select Cash on Delivery.
5. Review the order summary.
6. Click Confirm Order.
7. View the successful order confirmation message.

## 🎯 Learning Outcomes

- Implementing React Popup components.
- Managing component state with React Hooks.
- Working with React Context API.
- Handling radio button selection.
- Implementing conditional button disabling.
- Calculating dynamic cart totals.
- Improving responsive CSS styling.

## 👩‍💻 Author

**Rosan Fara Mazwin**

GitHub: [RosanFaraMazwinM](https://github.com/RosanFaraMazwinM)

LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/m-rosan-fara-mazwin-652540269/)

---

⭐ Built as part of the NxtWave React.js Enhancement Project.
