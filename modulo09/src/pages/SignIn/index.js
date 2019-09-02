import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber Logo" />

      <form action="">
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
