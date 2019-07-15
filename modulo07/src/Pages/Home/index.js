import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          height={240}
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tênis Muito Legal super oferna na promoção</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          height={240}
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tênis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          height={240}
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tênis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          height={240}
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tênis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          height={240}
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tênis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
