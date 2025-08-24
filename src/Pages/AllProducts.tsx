import { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { useStore } from "../Context/ContextStore";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const { result, handleSort } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickView = (id: string | number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="flex justify-center items-center">
      <section className="flex max-container gap-10 w-full">
        <aside className="w-1/4">
          <Sidebar />
        </aside>
        <section className="flex flex-grow w-full flex-col">
          <div className="flex justify-between items-center py-6 border-b-2">
            <h1 className="text-2xl font-bold">ALL PRODUCTS</h1>
            <label className="text-xl">
              Sort By:{" "}
              <select
                name="sort"
                className="border-2 text-lg py-2 px-4 rounded-lg outline-none"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="" defaultChecked>
                  Default
                </option>
                <option value="highToLow">High to Low</option>
                <option value="lowToHigh">Low to High</option>
              </select>
            </label>
          </div>
          <div className="grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-5">
            {result?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-center items-center flex-col gap-5 shadow-md rounded-md p-5"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.model}
                    className="object-contain h-64 w-64"
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-center text-lg font-bold text-gray-700 uppercase">
                    {item.title}
                  </h1>
                  <p className="text-center text-base font-bold text-gray-700 uppercase">
                    ${item.price}
                  </p>
                </div>
                <button
                  className="w-52 border  text-center bg-white py-2 text-base font-bold text-blue-500"
                  onClick={() => handleClickView(item?.id)}
                >
                  VIEW PRODUCT
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default AllProducts;
