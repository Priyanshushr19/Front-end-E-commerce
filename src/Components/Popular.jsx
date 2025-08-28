import React from 'react';
import Item from './Item';
import data_product from '../assets/data';

export default function Popular() {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] bg-gradient-to-b from-white to-green-400">
      <h1 className="text-[#171717] text-[40px] font-semibold">
        Popular in women
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />

      <div className="mt-[50px] flex gap-[30px] flex-wrap justify-center">
        {data_product.map(({ id, image, new_price, old_price, name }) => (
          <Item
            key={id}
            id={id}
            image={image}
            new_price={new_price}
            old_price={old_price}
            name={name}
          />
        ))}
      </div>
    </div>
  );
}
