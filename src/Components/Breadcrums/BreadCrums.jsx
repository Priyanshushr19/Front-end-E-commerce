import React from 'react';
import arrow_icon from '../../assets/arrow_icon.png';

export default function BreadCrums({ product }) {
  if (!product) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-[#5e5e5e] text-[16px] font-semibold capitalize mt-[30px] mb-[30px]">
      Home <img src={arrow_icon} alt=">"  className='h-10'/>
      Shop <img src={arrow_icon} alt=">" className='h-10'/>
      {product.category} <img src={arrow_icon} alt=">" className='h-10'/>
      {product.name}
    </div>
  );
}
