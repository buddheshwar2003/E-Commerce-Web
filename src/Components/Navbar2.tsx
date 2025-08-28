import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../Context/ContextStore";
import PopUp from "./PopUp";
import { IoMdSearch } from "react-icons/io";

const Navbar2 = () => {
  const { cartItem, user } = useStore();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      setShowPopUp(true);
    } else {
      navigate("/cart");
    }
  };

  const closePopup = () => {
    setShowPopUp(false);
  };

  return (
    <section className="w-full flex justify-center items-center border-2 relative">
      <nav className="flex justify-between items-center max-container p-2 w-full py-7 lg:px-10 max-lg:px-5">
        <Link
          to={"/"}
          className="text-xl flex flex-col justify-center items-center"
        >
          <h2 className="text-4xl font-bold tracking-wide">
            ALLx<span className="text-blue-500">MART</span>
          </h2>
          <p className="text-xs font-semibold text-gray-500 tracking-widest">
            AAPKA APNA MART
          </p>
        </Link>
        <div className="max-sm:hidden">
          <input
            type="text"
            placeholder="Search Item"
            className="border h-[50px] lg:min-w-[550px] max-lg:max-w-[250px] content-center outline-none p-2 rounded-l-lg "
          />
          <button className="border h-[50px] px-5 bg-blue-500 rounded-r-lg font-semibold text-white">
            Search
          </button>
        </div>
        <div className="flex justify-center items-center gap-8 max-lg:gap-3">
          <div
            className="hidden max-sm:block"
            onClick={() => setShowSearch(!showSearch)}
          >
            <IoMdSearch className="text-3xl cursor-pointer" />
          </div>
          <span className="flex h-9 justify-center items-center relative w-9">
            <FaHeart className="text-2xl" />
            <span className="border h-4 w-4 bg-blue-500 text-white flex justify-center items-center text-[10px] rounded-full absolute -top-[6px] -right-[6px]">
              1
            </span>
          </span>

          <button
            className="flex h-9 justify-center items-center relative w-9"
            onClick={handleClick}
          >
            <FaShoppingCart className="text-2xl" />
            <span className="border h-4 w-4 bg-blue-500 text-white flex justify-center items-center text-[10px] rounded-full absolute -top-[6px] -right-[6px]">
              {user ? cartItem.length : 0}
            </span>
          </button>
        </div>
      </nav>
      {/* PoPUp */}
      {showPopUp && <PopUp onClose={closePopup} />}
      {/* SearcghPopup */}
      { showSearch && <div className="absolute w-full bg-white -bottom-24 duration-300 transition-all border-t sm:hidden flex px-10 left-0 py-6">
        <input
          type="text"
          placeholder="Search Item"
          className="border h-[50px] w-full content-center outline-none p-2 rounded-l-lg "
        />
        <button className="border h-[50px] px-5 bg-blue-500 rounded-r-lg font-semibold text-white">
          Search
        </button>
      </div>}
    </section>
  );
};

export default Navbar2;
