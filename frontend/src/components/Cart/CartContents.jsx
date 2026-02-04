import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <>
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between py-4 border-b border-gray-500"
        >
          <div className="flex items-start gap-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-23 object-cover"
            />

            <div>
              <h4 className="font-medium text-xs">{product.name}</h4>
              <p className="text-[10px] text-gray-500">  
                {product.color} / {product.size}
              </p>
              <div className="flex items-center gap-1 ">
                <button className="text-sm border border-gray-300 px-1 rounded hover:border-gray-500">-</button>
              <span className="text-xs">{product.quantity}</span>
               <button className="text-sm border border-gray-300 px-1 rounded hover:border-gray-500">+</button>
              </div>
             
            </div>
            
          </div>
            <div>
                <p className="text-sm h-6 w-7 ">${product.price}</p>
                <button>
                    <RiDeleteBin3Line className="text-sm ml-1 h-6 w-4 mt-2 text-red-600 "/>
                </button>
            </div>
        </div>
        
      ))}
    </>
  );
};

export default CartContents;
