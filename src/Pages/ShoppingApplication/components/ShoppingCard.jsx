import React from "react";

const ShoppingCard = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center mt-10">
          <div className="w-full max-w-65  rounded-lg px-3 py-3 border bg-gray-50 border-gray-200 shadow-[0px_1px_5px_1px_rgba(0,_0,_0,_0.1)]">
            <div className="w-full px-6 space-y-3">
              <h3 className="text-[17px] font-semibold">
                India's India's biggest ...
              </h3>
              <p className="text-sm">
                Shopping Card means a retailer and retail branded plastic...
              </p>
              <div className="w-full h-44 overflow-hidden">
                <img
                  src="./src/assets/bag.webp"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full flex justify-between mt-3.5">
              <span className="text-base font-semibold text-green-600">
                $109.95
              </span>
              <button className="border border-black text-xs px-2.5 py-1 rounded-xl cursor-pointer font-bold">
                ADD TO CARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
