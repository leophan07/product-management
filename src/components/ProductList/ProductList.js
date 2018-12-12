import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Product List</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th className="text-center">Code</th>
                <th className="text-center">Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
