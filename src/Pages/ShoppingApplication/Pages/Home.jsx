import React, { useEffect, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";
import Spinner from "../../Spinner/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      setPosts([]);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : posts?.length > 0 ? (
          <div className="grid grid-cols-4 max-w-[80%] mx-auto pt-20 pb-5 gap-5 font-roboto">
            {posts?.map((item, index) => (
              <ShoppingCard key={index} CardItem={item} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Home;
