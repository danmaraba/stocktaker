import React,{useEffect, useState} from 'react';
import NewInventoryForm from './NewInventoryForm';


function Products() {
  const[inventories, setInventories]=useState([]);

  useEffect (()=>{
    fetch ('https://nameless-retreat-54870.herokuapp.com/inventories')
    .then(res => res.json())
    .then(data => setInventories(data))
  }, []);
  return (
    <NewInventoryForm/>
  )
}

export default Products