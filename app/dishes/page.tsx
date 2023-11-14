"use client";
import React, { useEffect, useState } from "react";
import "./Dishes.scss";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getProducts, reset } from "../features/product/productSlice";
import { ProductType } from "../types/Product.type";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import axios from "axios";

const Dishes = () => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchDishes, setSearchDishes] = useState([]);
  const { products, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  const fetchSearchDishes = async () => {
    try {
      let res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?search=${searchValue}`
      );
      let data = await res.data;
      setSearchDishes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, []);

  useEffect(() => {
    fetchSearchDishes();
  }, [searchValue]);

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
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <input
            type="text"
            placeholder="search..."
            name="search"
            className="form-control"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {searchDishes.length > 0 ? (
            <div className="cards">
              {searchDishes.map((product: ProductType) => (
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
                      <button onClick={() => handleAddToCart(product)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3>No products yet</h3>
          )}

          <div className="liner"></div>
        </div>
      </section>

      <section className="second">
        <div className="container">
          <div className="par">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="big">
            <div className="p1">
              <h3>How long does delivery take?</h3>
              <img src="../minus.png" alt="icon" />
            </div>
            <p>
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service.
            </p>
            <p className="par1">
              What's The Difference Between Free And Paid Plan ?
            </p>
            <div className="liner1">
              <div className="line"></div>
              <div className="p2">
                <h3>How Does It Work ?</h3> <img src="../plus.png" alt="icon" />
              </div>
            </div>
            <div className="liner1">
              <div className="line"></div>
              <div className="p2">
                <h3>How Does It Work ?</h3> <img src="../plus.png" alt="icon" />
              </div>
            </div>
            <div className="liner1">
              <div className="line"></div>
              <div className="p2">
                <h3>How Does It Work ?</h3> <img src="../plus.png" alt="icon" />
              </div>
            </div>
            <div className="liner1">
              <div className="line"></div>
              <div className="p2">
                <h3>How Does It Work ?</h3> <img src="../plus.png" alt="icon" />
              </div>
              <div className="line line3"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dishes;
