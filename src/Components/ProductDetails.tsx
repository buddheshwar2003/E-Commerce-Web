import { Link, useParams } from "react-router-dom";
import { useStore } from "../Context/ContextStore";
import { MdDone } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { store, addCart, cartItem } = useStore();
  const [cart, setCart] = useState<number>(1);

  const product = store?.find((p: any) => p.id.toString() === id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  const added = cartItem.some((obj: any) => obj.product.id === product.id);

  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-[80%] h-full bg-white rounded-md max-container">
        <div className="flex h-[70vh] w-full justify-between rounded-md border items-center">
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
              src={product.image}
              alt={product.model}
              className="h-[80%] w-[80%] object-contain"
            />
          </div>
          <div className="w-[50%] bg-gray-100 h-full flex justify-center items-start p-12 flex-col gap-6">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-sm font-bold text-gray-600">${product.price}</p>
            <div className="w-full">
              <p className="text-gray-600 flex gap-1">
                Availability :{" "}
                <span className="flex items-center gap-1 text-green-700 font-semibold">
                  In stock <MdDone className="text-xl" />
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p>Quantity:</p>
              <div className="flex gap-1">
                <button
                  className="border w-8 h-8 flex justify-center items-center text-lg"
                  onClick={() => {
                    if (cart > 1) setCart(cart - 1); // ✅ prevent going below 1
                  }}
                >
                  -
                </button>
                <div className="h-8 w-24 flex justify-center items-center border">
                  {cart}
                </div>
                <button
                  className="border w-8 h-8 flex justify-center items-center text-lg"
                  onClick={() => setCart(cart + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-5">
              {!added ? (
                <button
                  className="uppercase border h-10 w-40 font-semibold rounded-md text-blue-500"
                  onClick={() => addCart(product, cart)}
                >
                  add to cart
                </button>
              ) : (
                <Link
                  className="uppercase border h-10 w-40 font-semibold rounded-md text-blue-500 flex justify-center items-center"
                  to={"/cart"}
                >
                  go to cart
                </Link>
              )}
              <button className="uppercase border h-10 w-40 font-semibold rounded-md bg-blue-500 text-white">
                Buy Now
              </button>
            </div>
            <div className="flex items-center gap-2 font-semibold text-gray-800 uppercase">
              <FaHeart />
              <span>Add to wishlist</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-3 gap-3">
          <div className="w-full flex justify-center items-center flex-col">
            <h2 className="text-lg font-semibold text-gray-700">
              Product Details
            </h2>
            <div className="h-[1.5px] w-full bg-gray-600"></div>
          </div>
          <p className="text-base text-gray-700">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
