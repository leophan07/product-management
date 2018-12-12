import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm('Are you sure want to delete this product?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.status ? 'Enable' : 'Disable';
    var statusLabel = product.status ? 'warning' : 'default';
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{product.id}</td>
        <td>{product.name}</td>
        <td className="text-right">{product.price}</td>
        <td className="text-center">
          <span className={`label label-${statusLabel}`}>{statusName}</span>
        </td>
        <td className="text-center">
          <Link
            to={`/product/edit/${product.id}`}
            type="button" 
            className="btn btn-success"
          >
            Edit
          </Link> &nbsp;
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
