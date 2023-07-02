import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Bhakti/PD22/BankOfferPage/PC/desktop_header_cbcc.jpg"
          alt="bankAd"
        />

        {cart?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty.</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Shopping Cart</h2>

            {/* List out all of the Checkout products */}
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
