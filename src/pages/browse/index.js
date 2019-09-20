import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="/">
        <div>
          <img
            src="https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2016/11/1409676946094-418x235.jpg"
            alt="Playlist"
          />
        </div>
        <strong>HR-5 Brasil e a Fé Reformada</strong>
        <p>Participantes: Rodrigo, Jader e Eric</p>
      </Playlist>
      <Playlist href="/">
        <div>
          <img
            src="https://marceloberti.files.wordpress.com/2011/11/mte5ntu2mze2mtcyndg2mtu1.jpg?w=1080"
            alt="Playlist"
          />
        </div>
        <strong>HR-4 Quem foi João Calvino</strong>
        <p>Participantes: Rodrigo, Jader e Eric</p>
      </Playlist>
      <Playlist href="/">
        <div>
          <img
            src="https://abrilsuperinteressante.files.wordpress.com/2018/07/reforma-protestante-11.png?w=640&h=584"
            alt="Playlist"
          />
        </div>
        <strong>HR-3 O que foi a Reforma Protestante</strong>
        <p>Participantes: Rodrigo, Jader e Eric</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
