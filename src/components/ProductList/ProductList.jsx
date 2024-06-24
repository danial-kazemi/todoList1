import './ProductList.scss';
import Product from './Product/Product';
import PropTypes from 'prop-types';
ProductList.propTypes = {
    products: PropTypes.array,
    deleteItemHandler: PropTypes.func 
    // Other prop validations can continue from here
  };

function ProductList({products, deleteItemHandler}) {  
  return (
    <section className='product'>
        <h2>ProductList</h2>
        <ul className='product__list'>
            {
                products.map(item => <Product key={item.id} item={item} deleteItemHandler={deleteItemHandler} />)
            }
        </ul>
    </section>
    
  )
}

export default ProductList