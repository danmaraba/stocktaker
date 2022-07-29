import React from 'react';
function Inventories({inventory,onDeleteInventory}) {
  const {id,name,price,category}=inventory;
 console.log(inventory)

 function handleDeleteonClick() {
  fetch(`https://nameless-retreat-54870.herokuapp.com/inventories/${id}`,{
    method:"DELETE",
  })
  .then((response)=>response.json())
  .then(()=>{
    onDeleteInventory(id)})
  
}
  return (
    <div className='inventories'>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{category}</h3>
      <button className='delete'onClick={handleDeleteonClick}>Delete</button>
        
    </div>
  )
}

export default Inventories