import Brand from "./Brand";
import Category from "./Category";

const Sidebar = () => {
  return (
    <section className="">
      <h1 className="text-2xl font-bold py-6 border-b-2">Filter</h1>
      <Category />
      <Brand />
    </section>
  );
};

export default Sidebar;
