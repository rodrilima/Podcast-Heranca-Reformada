import React from 'react';

import { Container, Search, User } from './styles';

import {} from '../../assets/images/add_playlist.svg';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Buscar" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/37316634?s=460&v=4" alt="avatar" />
      Rodrigo Lima
    </User>
  </Container>
);

export default Header;
