import './ProductList.scss';
import Product from './Product/Product';
import PropTypes from 'prop-types';

const ProductList = ({products, deleteItemHandler}) => {  
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

ProductList.propTypes = {
  products: PropTypes.array,
  deleteItemHandler: PropTypes.func 
};

export default ProductList