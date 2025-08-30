import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useStore } from "../Context/ContextStore";
import { useNavigate } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import Category from "../Components/Category";
import Brand from "../Components/Brand";

const AllProducts = () => {
  const { result, handleSort } = useStore();
  const [mobnav , setMobnav] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickView = (id: string | number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="flex justify-center items-center">
      <section className="flex max-container max-md:flex-col gap-10 max-md:gap-3 w-full px-10 max-md:pt-5">
        <aside className="w-1/4 max-md:hidden">
          <Sidebar />
        </aside>
        <section className="flex justify-between items-center md:hidden">
          <button className="border-2 w-24 text-sm py-1 px-2 rounded-lg font-semibold flex justify-center items-center" onClick={()=>setMobnav(!mobnav)}>Filter <CiFilter /></button>
          <label className="text-xl max-md:text-sm">
            Sort By:{" "}
            <select
              name="sort"
              className="border-2 w-24 text-sm py-1 px-2 rounded-lg outline-none"
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="" defaultChecked>
                Default
              </option>
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
            </select>
          </label>
        </section>
       {mobnav && <section className="flex justify-around">
          <Category />
          <Brand />
        </section>} 
        <section className="flex flex-grow w-full flex-col">
          <div className="flex justify-between items-center py-6 max-md:py-3 border-b-2">
            <h1 className="text-2xl max-md:text-xl font-bold">ALL PRODUCTS</h1>
            <label className="text-xl max-md:hidden">
              Sort By:{" "}
              <select
                name="sort"
                className="border-2 text-lg py-2 px-4 max-md:text-sm max-md:py-1 max-md:px-2 rounded-lg outline-none"
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
          <div className="grid justify-center items-center lg:grid-cols-3 max-md:grid-cols-2 md:grid-cols-2 max-[544px]:grid-cols-1 grid-cols-1 gap-10 max-md:gap-4  py-5">
            {result?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-center items-center flex-col gap-5 shadow-md rounded-md p-5"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.model}
                    className="object-contain h-64 w-64 max-md:h-40 max-md:w-40"
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-center text-lg max-md:text-base font-bold text-gray-700 uppercase">
                    {item.title}
                  </h1>
                  <p className="text-center text-base max-md:text-sm font-bold text-gray-700 uppercase">
                    ${item.price}
                  </p>
                </div>
                <button
                  className="w-52 max-md:w-40 border  text-center bg-white py-2 text-base max-md:text-sm font-bold text-blue-500"
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
