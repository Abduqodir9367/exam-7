"use client";
import { memo, useEffect, useState } from "react";
import "./Details.scss";
import axios from "axios";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { ProductType } from "@/app/types/Product.type";
import Spinner from "@/app/components/Spinner";
import { useAppSelector } from "@/app/hooks/hooks";
import { toast } from "react-toastify";
import Link from "next/link";

const Details = ({ params: { id } }: any) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const [detailsDish, setDetailsDish] = useState<any>([]);

  const { isError, message } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, []);

  useEffect(() => {
    const fetchDetailsDish = async () => {
      try {
        const response = await axios.get(
          `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes/${id}`
        );
        setDetailsDish(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsDish();
  }, [id]);

  const handleAddToCart = (product: ProductType): void => {
    toast.success("Successfully added in Cart");
    if (!cart.includes(product)) {
      const updatedCart: any = [...cart, { ...product, numOfProducts: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  return (
    <div className="details">
      <Header />
      <div className="container">
        <Link href={"/dishes"}>
          <button className="back">
            <img src="../back.svg" alt="" /> Go back
          </button>
        </Link>
        <div className="big">
          {detailsDish ? (
            <div className="cart" key={detailsDish.id}>
              <div className="img">
                <img src={detailsDish.imgUrl} alt="img" className="image" />
                <img src="../like.png" alt="icon" className="like" />
              </div>
              <div className="body">
                <p className="p1">{detailsDish.category}</p>
                <h3>{detailsDish.name}</h3>
                <div className="line">
                  <p>24min •</p>
                  <img src="../star.png" alt="img" />
                  <p>{detailsDish.stars}</p>
                </div>
                <div className="foter">
                  <h4>{detailsDish.price}</h4>
                  <button onClick={() => handleAddToCart(detailsDish)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>

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
            <img src="../email-food.png" alt="img " />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default memo(Details);
