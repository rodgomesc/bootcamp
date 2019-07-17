/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      formatedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img height={240} src={product.image} alt={product.title} />

            <strong>{product.title}</strong>
            <span>{product.formatedPrice}</span>
            <button type="button">
              <div>
                <MdShoppingCart size={16} color="#fff" /> 1
              </div>
              <span>Adicionar ao Carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}