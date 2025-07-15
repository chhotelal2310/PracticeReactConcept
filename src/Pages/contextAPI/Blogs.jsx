import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Spinner from "../Spinner/Spinner";
import Card from "./Card";
import DataNotFound from "./DataNotFound";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <>
      <div className="w-full pt-16 pb-14 px-2">
        {loading ? (
          <Spinner />
        ) : posts?.length === 0 ? (
          <div>
            <DataNotFound />
          </div>
        ) : (
          posts?.map((item) => <Card key={item?.id} post={item} />)
        )}
      </div>
    </>
  );
};

export default Blogs;
