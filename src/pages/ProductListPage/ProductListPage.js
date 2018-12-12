import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductListPage extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  showProducts = (products) => {
    var result = null;
    if (products.length > 0 ) {
      result = products.map((product, index) => {
        return (
          <ProductItem 
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        )
      });
    }
    return result;
  }

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  }
  
  render() {
    var { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-large btn-primary m-b-20">Add New Product</Link>
        <ProductList>
          {this.showProducts(products)}
        </ProductList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProducts : () => {
      return dispatch(actions.fetchProductsRequest());
    },
    onDeleteProduct : (id) => {
      return dispatch(actions.deleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductListPage);
