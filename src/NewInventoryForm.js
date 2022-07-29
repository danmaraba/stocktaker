import React,{useState} from 'react'


function NewInventoryForm({onAddInventory}) {
  const[formData,setFormData]=useState({
    name: "", price: "", category: ""
  });

  function handleChange(e) {
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch ('https://nameless-retreat-54870.herokuapp.com/inventories',{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({name:formData.name, price:formData.price, category:formData.category})
    
  })
   .then(res=>res.json())
   .then((data)=>{
    onAddInventory(data) 
    setFormData({...formData,name:"",price:"",category:""})
   })
  }

  return (
    
    <form className='new-inventory-form' onSubmit={handleSubmit}>
      <h1>My Stocks</h1>
      <h2>Category Filters</h2>
      <label className='name'>
        <input placeholder='Name' name="name" onChange={handleChange} value={formData.name}/>
      </label>
      <label>
        <input  placeholder='Price'name="price" onChange={handleChange} value={formData.price}/>
      </label>
      <label>
      <input  placeholder='Category'name="category" onChange={handleChange} value={formData.category}/>
      </label>
      <input className='add-inventory' type="submit" onSubmit={handleSubmit} value="Add Inventory"/>

    </form>
   )
}


export default NewInventoryForm