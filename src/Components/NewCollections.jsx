import React from 'react';
import Item from './Item';
import new_collections from '../assets/newcollections';

function NewCollections() {
  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px] bg-gradient-to-b from-white to-green-400">
      <h1 className="text-[#171717] text-[40px] font-semibold">New Collections</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-[30px] px-4">
        {new_collections.map((item, i) => (
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

export default NewCollections;
