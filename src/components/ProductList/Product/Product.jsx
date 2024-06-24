import PropTypes from 'prop-types';

Product.propTypes = {
    item: PropTypes.object,
    deleteItemHandler: PropTypes.any,
  };
function Product({item,deleteItemHandler}) {
  return (
    <li>
        <h3>{item.title}</h3>
        <button className='product__botton' onClick={()=> deleteItemHandler(item.id)}>Delete me!</button>
    </li>
  )
}

export default Product