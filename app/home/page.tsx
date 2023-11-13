"use client";
import React, { useEffect, useState } from "react";
import "../home/Home.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toast } from "react-toastify";
import { ProductType } from "../types/Product.type";
import Link from "next/link";
import { getProducts } from "../features/product/productSlice";
import Spinner from "../components/Spinner";

const Home = () => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const { products, isLoading, isError, message } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getProducts());

    // return () => {
    //   dispatch(reset());
    // };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddToCart = (product: ProductType): void => {
    toast.success("Successfully added in Cart");
    if (!cart.includes(product)) {
      const updatedCart: any = [...cart, { ...product, numOfProducts: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };


  return (
    <div className="Home">
      <Header />  
      <section className="hero">
        <div className="container">
          <div className="big">
            <div className="left">
              <p>OVER 1000 USERS</p>
              <h1>Enjoy Foods All Over The World</h1>
              <p className="p2">
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus.
              </p>
              <button>Get Started</button>
            </div>
            <div className="right">
              <img src="./hero1.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="text">
              <div className="p1 flex flex-col items-center">
                <h2>10K+</h2>
                <p>Satisfied Costumers All Great Over The World </p>
              </div>
              <div className="p1 flex flex-col items-center">
                <h2>4M</h2>
                <p>Healthy Dishes Sold?Including Milk Shakes Smooth</p>
              </div>
              <div className="p1 flex flex-col items-center">
                <h2>99.99%</h2>
                <p>Reliable Customer Support?We Provide Great Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quality">
        <div className="container">
          <div className="big">
            <div className="left">
              <img src="./mobile.png" alt="" />
            </div>
            <div className="right">
              <h1>Premium Quality?For Your Health</h1>
              <div className="text1">
                <p>
                  • Premium quality food is made with ingredients that are
                  packed with essential vitamins, minerals.
                </p>
                <p>
                  • These foods promote overall wellness by support healthy
                  digestion and boosting immunity
                </p>
              </div>
              <button>Download</button>
            </div>
          </div>
          <div className="line text-center "></div>
        </div>
      </section>
      <section className="king">
        <div className="container">
          <div className="box">
            <img src="./king-img.png" alt="king" className="image" />
            <div className="box-bottom">
              <h2>The Chicken King</h2>
              <div className="bottom-center">
                <p>24min •</p>
                <img src="./star.png" alt="img  " />
                <p>4.8</p>
              </div>
              <img src="./save.png" alt="icon" className="res" />
            </div>
          </div>
        </div>
      </section>
      <section className="dishes">
        <div className="container">
          <div className="par">
            <h1>Our Top Dishes</h1>
          </div>
          <div className="cards">
            {products.slice(0, 5).map((product: ProductType) => (
              <div className="card" key={product.id}>
                <Link href={`/dishes/${product.id}`}>
                  <div className="img">
                    <img src={product.imgUrl} alt="img" className="image" />
                    <img src="./like.png" alt="icon" className="like" />
                  </div>
                </Link>
                <div className="body">
                  <p className="p1">{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="line">
                    <p>24min •</p>
                    <img src="./star.png" alt="img  " />
                    <p>{product.stars}</p>
                  </div>
                  <div className="foter">
                    <h4>{product.price}</h4>
                    <button onClick={() => handleAddToCart(product)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href={"/dishes"}>
            <button className="all">View All</button>
          </Link>
          <div className="liner"></div>
        </div>
      </section>
      <section className="Dashboard">
        <div className="container">
          <div className="big">
            <div className="left">
              <h1>Control Purchases?Via Dashboard</h1>
              <div className="products">
                <div className="product">
                  <img src="./dash-prod.png" alt="img" />
                  <div className="right">
                    <h4>Chicken Hell</h4>
                    <p>On The Way</p>
                  </div>
                </div>
                <div className="product">
                  <img src="./dash-prod.png" alt="img" />
                  <div className="right">
                    <h4>Chicken Hell</h4>
                    <p>On The Way</p>
                  </div>
                </div>
                <div className="product">
                  <img src="./dash-prod.png" alt="img" />
                  <div className="right">
                    <h4>Chicken Hell</h4>
                    <p>On The Way</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="dashboard">
                <div className="par">
                  <h2>Purchases</h2>
                  <p>This month</p>
                </div>
                <div className="body">
                  <div className="body1">
                    <div className="top">
                      <img src="./dash1.png" alt="" />
                      <div className="center">
                        <h3>Expense</h3>
                        <p>Increased By 10%</p>
                      </div>
                      <h5>$409.00</h5>
                    </div>
                    <div className="bottom">
                      <img src="./line1.png" alt="img" />
                    </div>
                  </div>
                  <div className="body1">
                    {" "}
                    <div className="top">
                      <img src="./dash2.png" alt="" />
                      <div className="center">
                        <h3>Vocher Usage</h3>
                        <p>Vocher Usage</p>
                      </div>
                      <h5>$45.78</h5>
                    </div>
                    <div className="bottom">
                      <img src="./line2.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="liner"></div>
        </div>
      </section>
      <section className="customer">
        <div className="container">
          <div className="par">
            <h1>Customer Say</h1>
          </div>
          <div className="comments">
            <div className="comment1">
              <div className="par">
                <img src="./person.png" alt="img" />
                <div className="name flex flex-col items-start">
                  <h3>Alexander R.</h3>
                  <p>01 Year With Us </p>
                </div>
                <svg
                  className="image"
                  width="59"
                  height="45"
                  viewBox="0 0 59 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.797 44.2511C33.6916 38.2474 32.139 31.7262 32.139 24.6874C32.139 17.5452 34.0281 11.645 37.8062 6.98701C41.5844 2.32901 47.4586 0 55.429 0V9.78182C52.6342 9.78182 50.5898 10.4029 49.2959 11.645C48.002 12.8872 47.3551 15.2679 47.3551 18.7873V20.34H58.6896V44.2511H36.797ZM4.65799 44.2513C1.55267 38.2477 0 31.7264 0 24.6877C0 17.5454 1.88908 11.6452 5.66723 6.98723C9.44538 2.32923 15.3196 0.000219731 23.29 0.000219731V9.78204C20.4952 9.78204 18.4508 10.4031 17.157 11.6452C15.8631 12.8874 15.2161 15.2681 15.2161 18.7875V20.3402H26.5506V44.2513H4.65799Z"
                    fill="#DADADA"
                  />
                </svg>
              </div>
              <div className="body">
                <p>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
              </div>
              <img src="./stars.png" alt="stars" className="stars" />
            </div>
            <div className="comment2">
              <div className="card">
                <p>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <img src="./stars.png" alt="stars" className="res" />
              </div>
              <img src="./divider.png" alt="" className="lne" />
            </div>
            <div className="comment2 comment3">
              <div className="card">
                <p>
                  “ Online invoice payment helps effort. Online invoice payment
                  helps companies save time ”
                </p>
                <img src="./stars.png" alt="stars"  />
              </div>
            </div>
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

export default Home;
