import { AiOutlineHeart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const wishlistItems = [
  { id: 1, category: "Dresses", name: "Colorful Jacket", price: "$29", image: "https://images.unsplash.com/photo-1617046592749-85b405d3a51d?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, category: "Dresses", name: "Shirt In Botanical Cheetah Print", price: "$62", image: "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" },
  { id: 3, category: "Dresses", name: "Cotton Jersey T-Shirt", price: "$17", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q290dG9uJTIwSmVyc2V5JTIwVC1TaGlydHxlbnwwfHwwfHx8MA%3D%3D" },
];

export default function page() {
  return (
    <div className="w-full">
      <div className="flex gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex-1 group">

         
            <div className="relative bg-gray-200 aspect-square mb-3 overflow-hidden">

              <button className="absolute top-2 left-2 z-10 w-6 h-6 bg-white flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <IoCloseOutline size={16} />
              </button>

          
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>

        
            <div className="flex items-center justify-between mb-0.5">
              <p className="text-xs text-gray-400">{item.category}</p>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <AiOutlineHeart size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-800 font-medium leading-snug mb-0.5">{item.name}</p>
            <p className="text-sm text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}