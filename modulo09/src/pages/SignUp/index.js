import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber Logo" />

      <form action="">
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já Tenho Login</Link>
      </form>
    </>
  );
}
