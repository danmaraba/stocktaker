import React, {useEffect,useState}from 'react';
import InventoriesList from './InventoriesList';
import NewInventoryForm from './NewInventoryForm';

function Products() {
  const [inventories,setInventories]=useState([]);
  // console.log(inventories)
  

  useEffect(()=>{
    fetch('https://nameless-retreat-54870.herokuapp.com/inventories')
    .then(res=>res.json())
    .then(data=>setInventories(data))
  },[]);
  return (
    <>
    <NewInventoryForm />
    <InventoriesList inventories={inventories}/>,
     
     </>
  )
}

export default Products