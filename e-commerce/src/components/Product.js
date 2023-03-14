import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-x1 mx-auto my-10 flex gap-10 px-32">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5">
          <div>
            <h2 className="text-4x1 font-semibold">{details.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
