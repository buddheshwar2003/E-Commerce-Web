import Intro from "./Home/Intro";
import Hero from "./Home/Hero";
import Category from "./Home/Category";
import Products from "./Home/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Category />
      <div className="h-1 w-full bg-white"></div>
      <Products />
    </>
  );
};

export default Home;
