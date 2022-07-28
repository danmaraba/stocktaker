import React from 'react'

function NewInventoryForm() {
  return (
    <form className='new-inventory-form'>
      <label>
        Details
        <input type="text" name="text"/>
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