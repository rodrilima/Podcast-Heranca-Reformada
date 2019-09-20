import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 48px;
`;

export const List = styled.div`
  margin-top: 28px;
  display: flex;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  div {
    height: 250px;
    overflow: hidden;
  }

  div img {
    width: auto;
    height: 100%;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }
`;
