"use client";
import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { ProductType } from "../types/Product.type";
const Cart = () => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [cardPrice, setCardPrice] = useState<any>();
  const [count, setCount] = useState<any>(1);

  useEffect((): void => {
    let prods = JSON.parse(localStorage.getItem("cart")!) || [];
    console.log(prods)
    setCardPrice(prods?.price);
    setCart(prods);
  }, []);

  const increment = () => {
    setCount(count + 1);
    setCardPrice(cardPrice * count);
    // cart.numOfProducts + 1;
  };
  const decrement = (): void => {
    if (count === 0) {
      setCardPrice(cardPrice);
      setCount(0);
    } else if (count === 1) {
      if (window.confirm("Do you want to delete this cart?")) {
        localStorage.removeItem("cart");
      }
      window.location.reload();
    } else {
      setCardPrice(cardPrice / count);
      setCount(count - 1);
      // cart.numOfProducts - 1;
    }
  };
  // console.log(cart)
  return (
    <div className="Cart">
      <Header />
      <section className="hero">
        <div className="container">
          {cart.length > 0 ? (
            <div className="cards">
              {cart.map((i: ProductType, index) => (
                <div className="card" key={index}>
                  <img src={i.imgUrl} alt="img" />
                  <div className="content">
                    <div className="top">
                      <h3>{i.name}</h3>
                      <div className="end">
                        <button className="minus" onClick={() => decrement()}>
                          -
                        </button>
                        <p>{count}</p>
                        <button className="plus" onClick={() => increment()}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="bottom">
                      <h5>{cardPrice}</h5>
                      <h4>${count}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="free">
              <h3>No products yet</h3>
            </div>
          )}
          <div className="big">
            <div className="liner">
              <div className="par">
                <p>Subtotal</p>
                <p>$58.96</p>
              </div>
              <div className="line"></div>
            </div>
            <div className="liner">
              <div className="par">
                <p>Subtotal</p>
                <p>$58.96</p>
              </div>
              <div className="line"></div>
            </div>
            <div className="bottom">
              <h2>Total</h2>
              <h2>$62.55</h2>
            </div>
            <button>Review Payment</button>
          </div>
        </div>
      </section>

      <section className="email">
        <div className="container">
          <div className="box">
            <div className="left">
              <h1>GET 50%</h1>
              <form>
                <input
                  type="search"
                  name="search"
                  placeholder=" Enter Your Email Address"
                />
                <button>subscribe</button>
              </form>
            </div>
            <img src="./email-food.png" alt="img " />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
