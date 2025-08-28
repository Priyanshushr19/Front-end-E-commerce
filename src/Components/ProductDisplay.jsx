import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import star_icon from '../assets/star_icon.png'
import star_icon_dull from '../assets/star_dull_icon.png'

export default function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext)
  const [selectedSize, setSelectedSize] = useState(null)
  const [sizeError, setSizeError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError('Please select a size before adding to cart.')
      return
    }
    setSizeError('')
    addToCart(product.id, selectedSize)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  return (
    <div className="flex mx-[50px]">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[10px]">
          <img src={product.image} alt="" className="h-[160px]" />
          <img src={product.image} alt="" className="h-[160px]" />
          <img src={product.image} alt="" className="h-[160px]" />
        </div>
        <div>
          <img src={product.image} alt="" className="h-125 mx-10 px-5" />
        </div>
      </div>

      <div className="flex flex-col ml-[50px]">
        <h1 className="text-[#3d3d3d] text-[40px] font-bold">{product.name}</h1>

        <div className="flex items-center mt-[10px] gap-[15px] text-[#1c1c1c] text-[16px]">
          <img src={star_icon} alt="" className='h-5' />
          <img src={star_icon} alt="" className='h-5' />
          <img src={star_icon} alt="" className='h-5' />
          <img src={star_icon} alt="" className='h-5' />
          <img src={star_icon_dull} alt="" className='h-5' />
          <p>(130)</p>
        </div>

        <div className="flex my-[20px] gap-[30px] text-[20px] font-bold">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        <div className="text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus voluptate temporibus at odit obcaecati deserunt, cum fugiat doloremque ducimus!
        </div>

        <div className="mt-[10px]">
          <h1 className="text-[#656565] text-[16px] font-semibold">Select Size</h1>
          <div className="flex my-[20px] gap-[20px]">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div
                key={size}
                onClick={() => {
                  setSelectedSize(size)
                  setSizeError('')
                }}
                className={`px-[20px] py-[16px] border rounded cursor-pointer transition 
                  ${selectedSize === size
                    ? 'bg-[#ff4141] text-white border-[#ff4141]'
                    : 'bg-[#fbfbfb] text-black border-[#ebebeb] hover:border-[#c4c4c4]'}`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Show error message */}
        {sizeError && (
          <div className="text-[#ff4141] font-semibold mb-2">{sizeError}</div>
        )}

        {/* Success effect message */}
        {showSuccess && (
          <div className="text-green-600 font-semibold mb-2 animate-fadeInOut">
            Added to cart!
          </div>
        )}

        <button
          className="px-[40px] py-[20px] w-[400px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[20px] border-none outline-none cursor-pointer rounded transform hover:scale-105 transition duration-300"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>

        <div className="mt-[10px]">
          <span className="font-semibold">Category: </span>
          <span>Women, tshirt, Top</span>
        </div>

        <div>
          <span className="font-semibold">Tags: </span>
          <span>Modern, Latest, Trend Shorts</span>
        </div>
      </div>
    </div>
  )
}
