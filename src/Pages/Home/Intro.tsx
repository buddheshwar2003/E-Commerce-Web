import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <section className="w-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-white">
        <section className="max-container flex justify-center items-center flex-col h-[40vh]">
          <h1 className="text-7xl font-bold text-white pb-5 max-lg:text-center max-lg:text-5xl">INTRODUCING <span className="text-black">ALLx<span className="text-blue-500">MART</span></span></h1>
          <p className="text-white font-bold text-xl">Buy the latest electronics.</p>
          <p className="text-white font-bold text-xl mb-2">The best electronics for tech lover.</p>
          <Link to={'/products'} className="bg-white text-blue-500 font-bold px-24 max-sm:px-16 text-lg py-3">SHOP NOW</Link>
        </section>
    </section>
  )
}

export default Intro