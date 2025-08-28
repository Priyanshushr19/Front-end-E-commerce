// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import remove_icon from '../assets/remove.webp';

// export default function CartIems() {
//   const { removeCart, getTotal, all_product, cartItems } = useContext(ShopContext);

//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const [address, setAddress] = useState('');
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const handleBuyNowClick = () => {
//     setShowAddressForm(true);
//     setOrderPlaced(false); // reset if previously ordered
//   };

//   const handlePlaceOrder = () => {
//     if (!address.trim()) {
//       alert('Please enter a shipping address.');
//       return;
//     }
//     // Here you can add actual order processing logic (API call, etc.)
//     alert(`Order placed! Shipping to: ${address}`);
//     setShowAddressForm(false);
//     setAddress('');
//     setOrderPlaced(true);
//   };

//   return (
//     <div className="mx-[70px] my-[50px]">
//       {/* ... existing cart table and products ... */}

//       <div className="flex mt-[70px] mb-[70px] gap-10">
//         <div className="flex-1 flex flex-col gap-[30px] mr-[100px]">
//           <h1 className="text-2xl font-bold">Cart Total</h1>
//           <div className="space-y-4">
//             <div className="flex justify-between py-[15px] text-lg">
//               <p>Subtotal</p>
//               <p>${getTotal()}</p>
//             </div>
//             <hr />
//             <div className="flex justify-between py-[15px] text-lg">
//               <p>Shipping fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="flex justify-between py-[15px] font-semibold text-lg">
//               <p>Total</p>
//               <p>${getTotal()}</p>
//             </div>
//           </div>

//           {/* Buy Now button */}
//           {!showAddressForm && (
//             <button
//               className="w-[250px] h-[50px] cursor-pointer bg-[#ff5a5a] text-white text-[16px] font-semibold rounded hover:bg-[#ff4343]"
//               onClick={handleBuyNowClick}
//             >
//               Buy Now
//             </button>
//           )}

//           {/* Address Form */}
//           {showAddressForm && (
//             <div className="flex flex-col gap-3 mt-4">
//               <label className="font-semibold text-lg" htmlFor="address">
//                 Enter your shipping address:
//               </label>
//               <textarea
//                 id="address"
//                 rows="4"
//                 className="p-3 border rounded resize-none"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder="123 Main St, City, Country"
//               />
//               <button
//                 className="w-[250px] h-[50px] bg-green-600 text-white rounded font-semibold hover:bg-green-700"
//                 onClick={handlePlaceOrder}
//               >
//                 Confirm Address & Place Order
//               </button>
//             </div>
//           )}

//           {/* Order confirmation */}
//           {orderPlaced && (
//             <p className="mt-4 text-green-600 font-medium">
//               Thank you! Your order has been placed.
//             </p>
//           )}
//         </div>

//         {/* Promo code section unchanged */}
//         <div className="flex-1">
//           <p className="text-lg font-medium text-[#555] mb-2">
//             If you have a promo code, enter it here:
//           </p>
//           <div className="flex bg-[#eaeaea] h-[50px] w-[300px] mt-[15px] rounded overflow-hidden">
//             <input
//               type="text"
//               placeholder="Promo"
//               className="flex-1 px-3 outline-none bg-transparent text-[16px]"
//             />
//             <button className="w-[150px] h-full bg-black text-white text-[16px] font-medium">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../assets/remove.webp';
import { Link } from 'react-router-dom';

export default function CartIems() {
  const { removeCart, getTotal, totalIt, all_product, cartItems } = useContext(ShopContext);

  return (
    <div className="mx-[70px] my-[50px]">
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[30px] py-[10px] text-[#454545] text-[18px] font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[30px] py-[10px] text-[15px] font-medium">
                <img src={e.image} alt={e.name} className="h-[100px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="h-[40px] w-[100px] border px-2 py-1 rounded">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeCart(e.id)}
                  alt="remove"
                  className="w-[20px] cursor-pointer"
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            </div>
          );
        }
        return null;
      })}

      <div className="flex mt-[70px] mb-[70px] gap-10">
        <div className="flex-1 flex flex-col gap-[30px] mr-[100px]">
          <h1 className="text-2xl font-bold">Cart Total</h1>
          <div className="space-y-4">
            <div className="flex justify-between py-[15px] text-lg">
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] text-lg">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] font-semibold text-lg">
              <p>Total</p>
              <p>${getTotal()}</p>
            </div>
          </div>
          {/* <button className="w-[250px] h-[50px] cursor-pointer bg-[#ff5a5a] text-white text-[16px] font-semibold rounded hover:bg-[#ff4343]">
            <Link to="AddressForm">Buy Now</Link>
          </button> */}
          <Link
            to="/AddressForm"  // Your route path
            className="w-[250px] h-[50px] cursor-pointer bg-[#ff5a5a] text-white text-[16px] font-semibold rounded hover:bg-[#ff4343] flex items-center justify-center"
          >
            Buy Now
          </Link>

        </div>

        <div className="flex-1">
          <p className="text-lg font-medium text-[#555] mb-2">
            If you have a promo code, enter it here:
          </p>
          <div className="flex bg-[#eaeaea] h-[50px] w-[300px] mt-[15px] rounded overflow-hidden">
            <input
              type="text"
              placeholder="Promo"
              className="flex-1 px-3 outline-none bg-transparent text-[16px]"
            />
            <button className="w-[150px] h-full bg-black text-white text-[16px] font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



// // import React, { useContext } from 'react'
// // import { ShopContext } from '../Context/ShopContext'
// // import remove_icon from '../assets/remove.webp'

// // export default function CartIems() {
// //   const {removeCart, getTotal, totalIt,all_product, cartItems}=useContext(ShopContext)
// //   return (
// //     <div>
// //       <div>
// //         <p>Product </p>
// //         <p>Title</p>
// //         <p>Price</p>
// //         <p>Quantity</p>
// //         <p>Total</p>
// //         <p>Remove</p>
// //       </div>
// //       <hr />
// //       {
// //         all_product.map((e)=>{
// //             if(CartIems[e.id]>0){
// //                 return <div>
// //                     <div>
// //                         <img src={e.image} alt="" height='100 px' />
// //                         <p>{e.name}</p>
// //                         <p>${e.new_price}</p>
// //                         <button>
// //                             {CartIems[e.id]}
// //                         </button>
// //                         <p>{e.new_price*cartItems[e.id]}</p>
// //                         <img src={remove_icon} onClick={()=>removeCart(e.id)} alt=""  height='20px'/>
// //                     </div>
// //                     <hr />
// //                 </div>
// //             }
// //             return null
// //         })
// //       }
// //       <div>
// //         <div>
// //             <h1>Cart Total</h1>
// //             <div>
// //                 <div>
// //                     <p>Subtotal</p>
// //                     <p>${getTotal()}</p>
// //                 </div>
// //                 <hr />
// //                 <div>
// //                     <p>Shipping fee</p>
// //                     <p>Free</p>
// //                 </div>
// //                 <hr />
// //                 <div>
// //                     <p>Total</p>
// //                     <p>${getTotal()}</p>
// //                 </div>
// //             </div>
// //             <button>Proceed to checkout</button>
// //         </div>
// //         <div><p>If You have a promo code, Enter here</p>
// //         <div><input type="text" placeholder='Promo' />
// //         <button>Submit</button></div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
