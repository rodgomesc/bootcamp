import React from 'react';

import { Link } from 'react-router-dom';
import logoPurple from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Headers() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="logo-purple" />
          <Link to="/dashboard">dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Rodrigo Gomes</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/fun@adorable.io.png"
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
