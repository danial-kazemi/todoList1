import './ProductList.scss';
import Product from './Product/Product';
import PropTypes from 'prop-types';

const ProductList = ({products, deleteItemHandler}) => {  
  return (
  <>
    { products.length === 0 
    ? (
      <section>
        <h2 className='error'>List is empty</h2>
      </section>
    )
    : (
      <section className='product'>
        
          <h2>ProductList</h2>
          <ul className='product__list'>
              {
                  products.map(item => {
                    return <Product key= {item.id} item= {item} deleteItemHandler= {deleteItemHandler} />
                  })
              }
          </ul>
      </section>    
    )
    }
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  deleteItemHandler: PropTypes.func 
};
export default ProductList