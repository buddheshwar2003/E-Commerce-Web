import { useNavigate } from "react-router-dom";
import { useStore } from "../../Context/ContextStore";

const Products = () => {
  const { store, loading , setCategory} = useStore();
  const products = store?.slice(31, 43);
  const navigate = useNavigate();

  const handleClick = (id: string | number) => {
    navigate(`product/${id}`);
  };
  const handleView =()=>{
    setCategory(null);
    navigate('/products')
  }
  return (
    <section className="bg-blue-500 w-full justify-center items-center flex ">
      <section className="flex justify-center items-center max-container flex-col gap-10 py-16">
        <h1 className="text-6xl font-bold uppercase text-white text-center">
          FEATURE PRODUCTS
        </h1>
        {loading ? (
          <div className="h-32 w-32 border-t-transparent border-8 border-white rounded-full animate-spin"></div>
        ) : (
          <div className="grid justify-center items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {products?.map((product: any) => (
              <div
                key={product.id}
                className="flex justify-center items-center flex-col gap-5"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-fill h-64 w-64"
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-center text-lg font-bold text-white uppercase">
                    {product.model}
                  </h1>
                  <p className="text-center text-lg font-bold text-white uppercase">
                    ${product.price}
                  </p>
                </div>
                <button
                  onClick={() => handleClick(product?.id)}
                  className="w-64 text-center bg-white py-3 text-base font-bold text-blue-500"
                >
                  VIEW PRODUCT
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={handleView}
          className="text-center bg-white py-3 text-base font-bold text-blue-500 uppercase px-20"
        >
          View More
        </button>
      </section>
    </section>
  );
};

export default Products;
