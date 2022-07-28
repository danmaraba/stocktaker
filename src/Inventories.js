import React from 'react';
function Inventories({inventory}) {
  const {name,price,category}=inventory;
 console.log(inventory)
  return (
    <div className='inventories'>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{category}</h3>
      <button className='delete'>X</button>
        
    </div>
  )
}

export default Inventories