import { MdDone } from "react-icons/md";
import { useStore } from "../Context/ContextStore";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const CartList = () => {
  const { cartItem, removeCart, updateCart, user, loading, clearCart } =
    useStore();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cartItem.length != 0) {
      alert("Order Placed");
      console.log("Order placed:", cartItem);

      // clear the cart after success
      clearCart();
    }
    else{
      alert("Please add Item in Cart")
      navigate('/products')
    }
  };

  const totalPrice: any = cartItem.reduce(
    (sum: number, item: any) => sum + item.product.price * item.itemNumber,
    0
  );

  const shipping = Math.round(totalPrice * 0.01);

  const tax = +(totalPrice * 0.18).toFixed(2);

  const orderTotal = totalPrice + shipping + tax;

  const handleClick = (id: string | number) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <Loading />;
  if (!user) {
    alert("Please Login Before Adding item in Cart");
    navigate("/login");
  }

  return (
    <section className="flex justify-center items-center px-10 max-lg:px-3">
      <section className="max-container w-full max-md:flex-col flex gap-8 max-lg:gap-4 justify-between items-start">
        <div className="w-[60%] max-md:w-full">
          {cartItem.length === 0 ? (
            <div className="p-6 flex justify-center items-center text-4xl h-[400px] text-gray-500">
              🛒 Your cart is empty
            </div>
          ) : (
            cartItem?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex border-b-2 w-full justify-center py-5 items-stretch"
              >
                <div
                  className="border-2 p-5 flex justify-center border-r-0 items-center"
                  onClick={() => handleClick(item.product.id)}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.model}
                    className="h-32 w-32 max-sm:h-20 max-sm:w-20 object-contain"
                  />
                </div>
                <div className="flex justify-between items-start gap-2 border-2 w-[75%] bg-gray-50 p-5">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h2 className="font-semibold text-xl max-lg:text-lg max-sm:text-base">
                      {item.product.title.slice(0, 40) + "..." }
                    </h2>
                    <p className="font-bold text-gray-700 text-base max-sm:text-sm">
                      ${item.product.price}
                    </p>
                    <div className="flex gap-1">
                      <button
                        className="border w-8 h-8 flex justify-center items-center text-lg"
                        onClick={() =>
                          item.itemNumber > 1 &&
                          updateCart(item.product, item.itemNumber - 1)
                        }
                      >
                        -
                      </button>
                      <div className="h-8 w-24 flex justify-center max-sm:w-16 items-center border">
                        {item.itemNumber}
                      </div>
                      <button
                        className="border w-8 h-8 flex justify-center items-center text-lg"
                        onClick={() =>
                          updateCart(item.product, item.itemNumber + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className="w-full">
                      <p className="text-gray-600 w-full flex gap-1 max-sm:text-sm">
                        Availability :{" "}
                        <span className="flex items-center justify-center gap-1 text-green-700 font-semibold">
                          In stock <MdDone className="text-xl" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <button onClick={() => removeCart(item.product)}>
                    <IoClose className="text-2xl" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col gap-3 w-[40%] max-md:w-full bg-gray-100 p-8 mt-5">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between border-b py-2">
            <p className="text-gray-600">Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between border-b py-2">
            <p className="text-gray-600">Shipping estimate</p>
            <p>${shipping}</p>
          </div>
          <div className="flex justify-between border-b py-2">
            <p className="text-gray-600">Tax estimate</p>
            <p>${tax}</p>
          </div>
          <div className="flex justify-between border-b py-2 mb-5">
            <p className="text-lg font-semibold">Order total</p>
            <p className="text-lg font-semibold">${orderTotal}</p>
          </div>
          <button
            className="uppercase border h-10 font-bold bg-white text-blue-500 flex justify-center items-center hover:bg-blue-500 hover:text-white duration-200"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </section>
    </section>
  );
};

export default CartList;
