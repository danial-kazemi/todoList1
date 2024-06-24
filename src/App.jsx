import { useState, useEffect } from 'react'
import ProductList from './components/ProductList/ProductList';
// import productsData from './API/productData';
import AddProduct from './components/AddProduct/AddProduct';
import getDataFromAPI from './API/getDataFromAPI';
import deleteDataFromAPI from './API/deleteDataFromAPI';
import addDataToApi from './API/addDataToApi';
import './App.css'

const apiAddress = "http://localhost:8000/products";
function App() {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    getDataFromAPI(apiAddress).then((res) => setProducts(res));
  }, []);
  const deleteItemHandler = (id) => {   
    deleteDataFromAPI(apiAddress, id);
    setProducts(products.filter((product) => product.id !== id))    
  }  

  const addItemHandler = (title) => {  
    if(title.length >= 1) {
        addDataToApi(apiAddress, title).then((data) => setProducts([...products, data]) );
    } else {
      throw new Error('empty')
    } 
  }
  return (
    <>
      <AddProduct addItemHandler={addItemHandler}/>
      <ProductList products={products} deleteItemHandler={deleteItemHandler} />
    </>
  )
}

export default App
