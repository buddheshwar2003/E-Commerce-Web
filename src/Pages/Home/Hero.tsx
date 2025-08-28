import { Link } from 'react-router-dom';
import bannerImage from '../../assets/image/watch for banner.png'

const Hero = () => {
  return (
    <section className="bg-blue-500 w-full flex justify-center items-center min-h-[80vh]" >
      <section className="flex justify-between items-center max-container lg:px-10 max-lg:flex-col md:px-5 max-lg:pt-10">
        <div className='flex justify-center items-start max-lg:items-center flex-col w-[70%]'>
          <h1 className='text-6xl font-bold uppercase text-white mb-3 max-lg:text-center max-lg:text-5xl'>The Product of the future</h1>
          <p className='text-white text-lg my-5 max-lg:text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            velit quod laborum nesciunt autem quam consequuntur dolores earum id
            natus sunt aut repellendus quos corrupti accusantium nostrum nemo,
            praesentium nam.
          </p>
          <div className='flex flex-wrap gap-5 justify-center items-center'>
            <Link to={'/products'} className='px-10 py-3 bg-white text-blue-500 font-bold'>BUY NOW</Link>
            <a href="#" className='px-10 py-3 bg-white text-blue-500 font-bold'>LEARN MORE</a>
          </div>
        </div>
        <div className='p-8'><img src={bannerImage} alt="Banner" className='max-lg:h-96 max-sm:h-72'/></div>
      </section>
    </section>
  );
};

export default Hero;
