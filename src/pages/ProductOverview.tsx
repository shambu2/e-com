import { all_product } from '@/assets/all_product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import { Product } from '@/lib/CartContext';

 interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
}


const ProductOverview : React.FC= () => {
    const {id} = useParams<{id:string}>()
    const navigate = useNavigate();
    const {addToCart} = useCart();
    const product: Product | undefined = all_product.find((item)=>item.id === Number(id))
    if(!product){
        return <div>Product not found</div>
    }

    const suggestions = all_product.filter(
        (item)=> item.category === product.category && item.id !== product.id
    ).slice(0,4)

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-orange-500 font-semibold mb-2">${product.new_price}</p>
          <p className="text-gray-400 line-through mb-4">${product.old_price}</p>
          <p className="mb-6">Category: {product.category}</p>
          <Button onClick={()=>addToCart(product)} className="px-6 py-3 hover:cursor-pointer bg-orange-500 text-white rounded hover:bg-orange-600">
            Add to Cart
          </Button>
          
        </div>
      </div>
      {suggestions.length > 0 && (
        <div>
          <h2 className="text-4xl font-bold mt-4 mb-4">You may also like</h2>
          <div className="grid gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {suggestions.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
                <div className="bg-white h-full  shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-orange-500 font-bold">${item.new_price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>

  )
}

export default ProductOverview