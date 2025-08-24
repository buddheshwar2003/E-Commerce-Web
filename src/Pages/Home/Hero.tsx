import { Link } from 'react-router-dom';
import bannerImage from '../../assets/image/watch for banner.png'

const Hero = () => {
  return (
    <section className="bg-blue-500 w-full flex justify-center items-center h-[80vh]">
      <section className="flex justify-between items-center max-container">
        <div className='flex justify-center items-start flex-col w-[70%]'>
          <h1 className='text-6xl font-bold uppercase text-white mb-3'>The Product of the future</h1>
          <p className='text-white text-lg my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            velit quod laborum nesciunt autem quam consequuntur dolores earum id
            natus sunt aut repellendus quos corrupti accusantium nostrum nemo,
            praesentium nam.
          </p>
          <div className='flex gap-5'>
            <Link to={'/products'} className='px-10 py-3 bg-white text-blue-500 font-bold'>BUY NOW</Link>
            <a href="#" className='px-10 py-3 bg-white text-blue-500 font-bold'>LEARN MORE</a>
          </div>
        </div>
        <div className='p-8'><img src={bannerImage} alt="Banner" /></div>
      </section>
    </section>
  );
};

export default Hero;
