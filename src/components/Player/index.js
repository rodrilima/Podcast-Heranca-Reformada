import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
// import PauseIcon from '../../assets/images/pause.svg';
import FowardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import LikeIcon from '../../assets/images/yellowlike.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://abrilsuperinteressante.files.wordpress.com/2018/07/reforma-protestante-11.png?w=640&h=584"
        alt="Cover"
        className="cover"
      />
      <div>
        <span>HR-3 O que foi a Reforma Protestante</span>
        <small>Participantes: Rodrigo, Jader e Eric</small>
      </div>
      <img src={LikeIcon} alt="Favoritar" className="like" />
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="ShuffleIcon" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="BackwardIcon" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="PlayIcon" />
        </button>
        <button type="button">
          <img src={FowardIcon} alt="FowardIcon" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="RepeatIcon" />
        </button>
      </Controls>
      <Time>
        <span>1:30</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#F9C033' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:25</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#F9C033' }}
        handleStyle={{ display: 'none' }}
        value={80}
      />
    </Volume>
  </Container>
);

export default Player;
