import { useStore } from "../Context/ContextStore"

const Brand = () => {
  const {brand ,setBrand}=useStore();

  return (
    <div className="py-6 flex flex-col gap-2 border-b-2">
        <h2 className="text-lg font-semibold text-gray-600 pb-3">Brand</h2>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="brand"
            value=""
            className="sr-only peer"
            onChange={e=>setBrand(e.target.value)}
            defaultChecked
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">All</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="samsung"
            className="sr-only peer"
            checked={brand==='samsung'}
            onChange={e=>setBrand(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Samsung</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="microsoft"
            className="sr-only peer"
            checked={brand==='microsoft'}
            onChange={e=>setBrand(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Microsoft</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="apple"
            className="sr-only peer"
            checked={brand==='apple'}
            onChange={e=>setBrand(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Apple</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="xiaomi"
            className="sr-only peer"
            checked={brand==='xiaomi'}
            onChange={e=>setBrand(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Xiaomi</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="others"
            className="sr-only peer"
            onChange={e=>setBrand(e.target.value)}
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
          <span className="ml-2 text-gray-700">Others</span>
        </label>
      </div>
  )
}

export default Brand