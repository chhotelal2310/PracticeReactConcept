import React from "react";

const Card = ({ post }) => {
  return (
    <>
      <div className="w-full flex justify-center font-serif">
        <div className="border w-full border-gray-300 shadow-md my-4 max-w-3xl rounded-lg px-2 py-2">
          <p className="text-base sm:text-lg  font-semibold">{post?.title}</p>

          <p>
            By <span className="">{post?.author}</span> on{" "}
            <span className="font-medium  text-gray-700 underline">
              {post?.category}
            </span>
          </p>
          <p className="font-medium">
            Posted on <span className="text-gray-700">{post?.date}</span>
          </p>
          <p className="text-base font-normal ">{post?.content}</p>
          <div className="text-sm sm:text-lg flex flex-wrap gap-x-1.5 sm:gap-x-2 font-normal underline text-blue-600 cursor-pointer mx-auto">
            {post?.tags?.map((tag, index) => (
              <span key={index}>{`#${tag}`}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
