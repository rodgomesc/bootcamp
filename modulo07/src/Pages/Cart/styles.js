import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background: #7159c1;
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      text-transform: uppercase;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.09, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 2px solid #eee;
  }
  img {
    width: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  color: #000;
  display: flex;
  align-items: baseline;

  span {
    font-weight: bold;
    color: #999;
    font-size: 10px;
    margin-right: 5px;
    text-transform: uppercase;
  }
  strong {
    font-size: 28px;
  }
`;
