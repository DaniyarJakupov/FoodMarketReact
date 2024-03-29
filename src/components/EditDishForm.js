import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditDishForm extends Component {
  static propTypes = {
    dish: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }).isRequired,
    id: PropTypes.string.isRequired,
    updateDish: PropTypes.func.isRequired,
    deleteDish: PropTypes.func.isRequired
  };

  onInputChange = e => {
    const updatedDish = { ...this.props.dish, [e.target.name]: e.target.value };
    this.props.updateDish(this.props.id, updatedDish);
  };

  render() {
    if (!this.props.dish) return null;
    const { name, image, price, status, desc } = this.props.dish;
    return (
      <div className="dish-edit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.onInputChange}
          value={name}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={this.onInputChange}
          value={price}
        />

        <select name="status" onChange={this.onInputChange} value={status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>

        <textarea
          name="desc"
          placeholder="Desc"
          onChange={this.onInputChange}
          value={desc}
        />

        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={this.onInputChange}
          value={image}
        />

        <button onClick={() => this.props.deleteDish(this.props.id)}>
          Remove dish
        </button>
      </div>
    );
  }
}

export default EditDishForm;
