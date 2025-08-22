// src/pages/CartPage.tsx
// import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl mb-4">Your cart is empty</h2>
        <Link to="/" className="text-orange-500 hover:underline">Go Shopping</Link>
      </div>
    );

  const total = cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-[100vh]">
      <h1 className="text-3xl mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>${item.new_price} × {item.quantity}</p>
              </div>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Button
          className="mt-2 hover:cursor-pointer px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
        //   onClick={clearCart}
        onClick={()=>window.location.href="/adress"}
        >
          Purchase now
        </Button> 
      </div>
    </div>
  );
};

export default Cart;
