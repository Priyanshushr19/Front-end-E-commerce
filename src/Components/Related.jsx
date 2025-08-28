import React from 'react';
import Item from './Item';
import data_product from '../assets/data';

export default function Related() {
  return (
    <div className="flex flex-col items-center gap-2.5 h-[90vh]">
      <h1 className="text-[#171717] text-[40px] font-semibold">Related Products</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="mt-[50px] flex gap-[30px] flex-wrap justify-center">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
