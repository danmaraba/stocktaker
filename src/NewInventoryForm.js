import React from 'react'


function NewInventoryForm() {
  return (
    
    <form className='new-inventory-form'>
      <h1>My Stocks</h1>
      <h2>Category Filters</h2>
      <label className='name'>
        <input type="text" placeholder='Name' name="text"/>
      </label>
      <label>
        <input type="text" placeholder='Price'/>
      </label>
      <label>
        Category
        <select className='category'>

        </select>
      </label>
      <input className='add-inventory' type="submit" value="Add Inventory"/>

    </form>
   )
}


export default NewInventoryForm