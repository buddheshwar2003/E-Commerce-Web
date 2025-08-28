import { Link } from "react-router-dom";

const PopUp = ({ onClose }: any) => {
  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
      onClick={onClose}
    >
      <section className="bg-white p-12 rounded shadow-lg flex justify-center items-center flex-col gap-2 ">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="Cart Image"
          className="h-64 w-64 object-contain"
        />
        <h2 className="text-xl">Missing Cart items?</h2>
        <p className="text-xs">Login to see the items you added previously</p>
        <Link to={"/login"} className="bg-blue-500 py-1 text-white px-8 mt-3">Login</Link>
      </section>
    </section>
  );
};

export default PopUp;
