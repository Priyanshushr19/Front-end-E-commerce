// import React from 'react'
// import { Link } from 'react-router-dom'

// function Item({props}) {
//   return (
//     <div>
//         <Link to={`/product/${props.id}`}>
//         <img src={props.image} onClick={window.scrollTo(0,0)} alt="" />
//         <p>{props.name}</p>
//         <div>
//             <div>${props.new_price}</div>
//         </div>
//         <div>
//             <div>
//                 ${props.old_price}
//             </div>
//         </div>
//         </Link>
//     </div>
//   )
// }

// export default Item

import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, image, name, new_price, old_price }) {
  return (
    <div className="w-[200px] border-2 border-black rounded-[20px] hover:scale-110 transition-transform duration-500">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={image}
          alt={name}
          className="rounded-t-[20px] w-[200px] mx-auto"
        />
        <p className="my-[6px] mx-[10px] text-sm">{name}</p>

        <div className="flex gap-[20px] px-[10px] pb-2">
          <div className="text-[#374151] text-[16px] font-semibold">
            ${new_price}
          </div>
          <div className="text-[#8c8c8c] text-[16px] font-medium line-through">
            ${old_price}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
