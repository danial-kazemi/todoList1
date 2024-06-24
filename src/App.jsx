import { useState } from 'react'
import ProductList from './components/ProductList/ProductList';
import productsData from './API/productData';
import AddProduct from './components/AddProduct/AddProduct';
import './App.css'

function App() {
  const [products, setProducts] = useState(productsData);
  const deleteItemHandler = (id) => {   
    setProducts(products.filter((product) => product.id !== id))
  }

  const addItemHandler = (title) => {
    const id = Math.floor(Math.random() * 10000);
    const newProduct = { id, title }
    setProducts([...products, newProduct])
    
  }
  console.log(products)
  return (
    <>
    <AddProduct addItemHandler={addItemHandler}/>
    <ProductList products={products} deleteItemHandler={deleteItemHandler}/>     
    </>
  )
}

export default App
