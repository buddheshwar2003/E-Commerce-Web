import { useNavigate } from "react-router-dom";
import { useStore } from "../../Context/ContextStore";
import { categoryList } from "../../Data/data";

const Category = () => {
  const { setCategory } = useStore();
  const navigate = useNavigate()

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedValue = e.currentTarget.value;
    setCategory(selectedValue); 
    navigate('/products')
  };

  return (
    <section className="bg-blue-500 flex justify-center items-center w-full">
      <section className="flex justify-center flex-col items-center max-container gap-10 py-16">
        <h1 className="text-white font-bold text-6xl text-center max-lg:text-5xl">
          BROWSE CATEGORIES
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {categoryList.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                onClick={handleChange}
                key={index}
                value={item.value}
                className="flex flex-col justify-center items-center gap-2 bg-white text-gray-800 px-16 py-5 w-[300px]"
              >
                <Icon className="text-5xl" />
                <span className="text-xl">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Category;
