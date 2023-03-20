import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.shop.productData);

  const [totalAmtt, setTotalAmt] = useState("0");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setTotalAmt(price.toFixed(2));
  }, [productData]);
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="mx-auto py-20 px-10 flex ">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2x1 font-medium"> Cart totals</h2>
            <p className="flex gap-4 items-center">
              Subtotal
              <span className="font-titleFont font-bold text-lg">
                ${totalAmtt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem, ipsum dolor sit amet consectuter adipisicing elit. Quos,
                veritatis
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-x1 font-bold">${totalAmtt}</span>
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newesOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
