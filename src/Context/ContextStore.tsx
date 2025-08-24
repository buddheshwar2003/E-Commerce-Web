import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import useFetch from "../Hooks/useFetch";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface typeContext {
  loading: boolean;
  error: string | null;
  result: any;
  category: string | null;
  setCategory: (category: string | null) => void;
  setBrand: (brand: string) => void;
  brand: string | null;
  handleSort: (e: string) => void;
  user: any;
  addCart: (product: any, quantity: number) => void;
  updateCart: (product: any, quantity: number) => void;
  removeCart: (product: any) => void;
  cartItem: any;
  store: any;
  clearCart:()=>void;
}

const ContextStore = createContext<typeContext | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [result, setResult] = useState<any[]>([]);
  const {
    data: store,
    loading,
    error,
  } = useFetch("https://fakestoreapi.in/api/products?limit=150");
  const [user, setUser] = useState<any>(null);
  const [cartItem, setCartItem] = useState<any[]>(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addCart = (product: any, quantity: number) => {
    const item = { product, itemNumber: quantity };
    setCartItem((prev) => {
      const updatedCart = [...prev, item];
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateCart = (product: any, quantity: number) => {
    setCartItem((prev) => {
      const updatedCart = prev.map((cart) =>
        cart.product.id === product.id
          ? { ...cart, itemNumber: quantity }
          : cart
      );
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeCart = (product: any) => {
    setCartItem((prev) => {
      const updatedCart = prev.filter((cart) => cart.product.id !== product.id);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

   const clearCart = () => {
    setCartItem([]);
    localStorage.removeItem("cartItem");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filterProduct = (
      item: any,
      listCategory: string | null,
      listBrand: string | null
    ) => {
      let filterData = item;
      const currentBrand = ["samsung", "microsoft", "apple", "xiaomi"];
      if (listBrand === "others") {
        filterData = filterData?.filter(
          (item: any) => !currentBrand.includes(item.brand)
        );
      } else if (listBrand && listCategory) {
        filterData = filterData?.filter(
          (item: any) =>
            item.brand?.toLowerCase() === listBrand &&
            item.category === listCategory
        );
      } else if (listBrand) {
        filterData = filterData?.filter(
          (item: any) => item.brand?.toLowerCase() === listBrand
        );
      } else if (listCategory) {
        filterData = filterData?.filter(
          (item: any) => item.category === listCategory
        );
      }
      return filterData;
    };

    const filtered = filterProduct(store, category, brand);
    setResult(filtered);
  }, [store, category, brand]);

  const handleSort = (e: string) => {
    const sorted = [...result];
    if (e === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (e === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setResult(sorted);
  };

  return (
    <ContextStore.Provider
      value={{
        result,
        loading,
        error,
        category,
        setCategory,
        setBrand,
        handleSort,
        user,
        addCart,
        updateCart,
        cartItem,
        store,
        brand,
        removeCart,
        clearCart
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export const useStore = () => {
  const context = useContext(ContextStore);
  if (!context) throw new Error("Something went wrong");
  return context;
};
