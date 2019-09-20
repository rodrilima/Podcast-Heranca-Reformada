import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <img src="favicon.png" alt="logo" />
      <Nav main>
        <li>
          <a href="/">Navegar</a>
        </li>
        <li>
          <a href="/">Sugerir um tema</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Ultimos PODCASTS</span>
        </li>
        <li>
          <a href="/">HR-5 Brasil e a Fé Reformada</a>
        </li>
        <li>
          <a href="/">HR-4 Quem foi João Calvino</a>
        </li>
        <li>
          <a href="/">HR-3 O que foi a Reforma Protestante</a>
        </li>
        <li>
          <a href="/">Ver mais</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>FAVORITOS</span>
        </li>
        <li>
          <a href="/">HR-3 O que foi a Reforma Protestante</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adiconar playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
