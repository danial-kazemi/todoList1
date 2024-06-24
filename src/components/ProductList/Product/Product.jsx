import PropTypes from 'prop-types';
import './Product.scss';
import { IoClose } from "react-icons/io5";


const Product= ({item, deleteItemHandler}) => {
  return (
    <li className='product__item'>
        <h3>{item.title}</h3>
        <button className='product__botton' onClick={()=> deleteItemHandler(item.id)}><IoClose /></button>
    </li>
  )
}
Product.propTypes = {
  item: PropTypes.object,
  deleteItemHandler: PropTypes.func,
};

export default Product