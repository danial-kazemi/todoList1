import PropTypes from 'prop-types';

const Product= ({item, deleteItemHandler}) => {
  return (
    <li>
        <h3>{item.title}</h3>
        <button className='product__botton' onClick={()=> deleteItemHandler(item.id)}>Delete me!</button>
    </li>
  )
}
Product.propTypes = {
  item: PropTypes.object,
  deleteItemHandler: PropTypes.func,
};

export default Product