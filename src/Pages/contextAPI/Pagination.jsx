import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Pagination = () => {
  const { page, totalPages, posts, handlePageChange } = useContext(AppContext);
  return (
    <>
      {posts?.length !== 0 && (
        <div className="w-full flex justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] font-serif fixed bottom-0 bg-white px-2">
          <div className="w-full max-w-3xl flex justify-between py-2">
            <div className="space-x-3">
              {page > 1 && (
                <button
                  className="border px-3 py-1 rounded-sm cursor-pointer border-gray-500"
                  onClick={() => handlePageChange(page - 1)}
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  className="border py-1 px-6 rounded-sm cursor-pointer border-gray-500"
                  onClick={() => handlePageChange(page + 1)}
                >
                  Next
                </button>
              )}
            </div>
            <p>
              Page {page} of {totalPages}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
