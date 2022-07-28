import React from 'react';
import Inventories from './Inventories';

function InventoriesList({inventories}) {
  console.log(inventories)
  
    
  return (
    <div className='inventories-list'>
      
      {inventories.map((inventory)=>{
    return(
      <Inventories key={inventory.id} inventory={inventory} />
    )
  })}
       
    </div>
  )
}

export default InventoriesList