import React from 'react';
import ChannelBotton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
        <Category>
          <span>Canais de texto</span>
          <AddCategoryIcon />
        </Category>

        <ChannelBotton channelName="chat - livre" />
        <ChannelBotton channelName="Trabalho" />
        <ChannelBotton channelName="LOL" />
        <ChannelBotton channelName="Valorant" />
      </Container>
  );
}

export default ChannelList;