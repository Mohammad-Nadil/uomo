import ProductCard from "@/components/ProductCard";

const wishlistItems = [
  {
    id: 1,
    category: "Dresses",
    name: "Colorful Jacket",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1617046592749-85b405d3a51d?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Dresses",
    name: "Shirt In Botanical Cheetah Print",
    price: "$62",
    image:
      "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    category: "Dresses",
    name: "Cotton Jersey T-Shirt",
    price: "$17",
    image:
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q290dG9uJTIwSmVyc2V5JTIwVC1TaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function page() {
  return (
    <div className="w-full">
      <div className="flex gap-6">
        {wishlistItems.map((item) => (
         <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
