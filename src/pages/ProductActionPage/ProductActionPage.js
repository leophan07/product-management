import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      status: false
    }
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productEditing) {
      var { productEditing } = nextProps;
      this.setState({
        id: productEditing.id,
        name: productEditing.name,
        price: productEditing.price,
        status: productEditing.status
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, name, price, status } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: name, 
      price: price,
      status: status
    };

    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  }
  

  render() {
    var {name, price, status} = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name: </label>
            <input 
              type="text" 
              name="name"
              className="form-control" 
              placeholder="Name product" 
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input 
              type="text" 
              name="price"
              className="form-control" 
              placeholder="Price product" 
              value={price}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Status: </label>
          </div>
          <div className="checkbox">
            <label>
              <input 
                type="checkbox" 
                name="status"
                value={status}
                onChange={this.onChange}
                checked={status}
              />
              Enable
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Save</button> &nbsp;
          <Link to="/product-list" className="btn btn-danger">Cancel</Link>
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productEditing: state.productEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct : (product) => {
      return dispatch(actions.addProductRequest(product));
    },
    onEditProduct: (id) => {
      return dispatch(actions.editProductRequest(id));
    },
    onUpdateProduct: (product) => {
      return dispatch(actions.updateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductActionPage);
