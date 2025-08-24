import { useStore } from "../Context/ContextStore"

const Category = () => {
  const {category,setCategory}=useStore();

  return (
    <div className="py-6 flex flex-col gap-2 border-b-2">
        <h2 className="text-lg font-semibold text-gray-600 pb-3">Category</h2>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value={''}
            className="sr-only peer"
            onChange={e=>setCategory(e.target.value)}
            defaultChecked
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">All</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value="tv"
            className="sr-only peer"
            checked={category === 'tv'}
            onChange={e=>setCategory(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">TV</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value="audio"
            className="sr-only peer"
            checked={category === 'audio'}
            onChange={e=>setCategory(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">HeadPhones</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value="laptop"
            className="sr-only peer"
            checked={category === 'laptop'}
            onChange={e=>setCategory(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Laptops</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value="mobile"
            className="sr-only peer"
            checked={category === 'mobile'}
            onChange={e=>setCategory(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Mobiles</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value="gaming"
            className="sr-only peer"
            checked={category === 'gaming'}
            onChange={e=>setCategory(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Gaming</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value="appliances"
            className="sr-only peer"
            checked={category === 'appliances'}
            onChange={e=>setCategory(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Appliances</span>
        </label>
      </div>
  )
}

export default Category