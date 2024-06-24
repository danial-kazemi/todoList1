import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AddProduct.scss'
import { IoAdd } from "react-icons/io5";




const AddProduct = ({addItemHandler}) => { 

  const [title, setTitle] = useState('');
  const[buttonDisable, setButtonDisable] = useState(true);  
  useEffect(()=> {
    setButtonDisable(title.length > 0 ? false: true)  
  },[title])  
    const submitHandler = (e)=> {
      e.preventDefault();
      
      addItemHandler(title);
      setTitle('');
    }

  return (
    <form className='form' onSubmit={(e) => submitHandler(e) }>
        <input className='form__input' type="text"  onChange={(e) => setTitle(e.target.value)} value={title}/>
        <button disabled={buttonDisable === true ? true : false} className='form__button' type='submit'><IoAdd /></button>        
    </form>
  )
}

AddProduct.propTypes = {
  addItemHandler: PropTypes.func
};

export default AddProduct


