import { useState } from 'react';
import PropTypes from 'prop-types';

import './AddProduct.scss'


const AddProduct = ({addItemHandler}) => {
  const [title, setTitle] = useState('');
    const submitHandler = (e)=> {
        e.preventDefault();
        addItemHandler(title);
    }

  return (
    <form className='form' onSubmit={(e) => submitHandler(e) }>        
        <input className='form__input' type="text"  onChange={(e) => setTitle(e.target.value)} value={title}/>
        <button className='form__button' type='submit'>add</button>        
    </form>
  )
}

export default AddProduct

AddProduct.propTypes = {
  addItemHandler: PropTypes.func
};
