import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  const [sortOption, setSortOption] = useState('default');

  // Sort the products based on selected option
  const filteredProducts = all_product
    ?.filter((item) => item.category === props.category)
    ?.sort((a, b) => {
      if (sortOption === 'price-low-to-high') return a.new_price - b.new_price;
      if (sortOption === 'price-high-to-low') return b.new_price - a.new_price;
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
      return 0; // default
    });

  return (
    <div className="w-full">
      <img src={props.banner} alt="" className="w-full h-120 object-cover rounded-lg" />

      {/* Header and Sort */}
      <div className="flex justify-between items-center mx-[170px] mt-4">
        <p className="text-base">
          <span className="font-semibold">Showing 1 - {filteredProducts?.length}</span> products
        </p>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm cursor-pointer focus:outline-none"
          >
            <option value="default">Default</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
          {/* <img src={dropdown_icon} alt="dropdown" className="h-4" /> */}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-y-20 mx-[170px] my-5">
        {filteredProducts?.map((item, i) => (
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

      {/* Explore More */}
      <div className="flex justify-center items-center mx-auto my-16 w-[200px] h-[60px] rounded-full bg-[#ededed] text-[#272424] text-lg font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  );
}
