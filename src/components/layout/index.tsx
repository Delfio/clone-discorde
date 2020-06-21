import React from 'react';
import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../severname';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import ChannelData from '../ChannelData';
import UserList from '../UserList';

const layout: React.FC = () => {
  return (
      <Grid>
          <ServerList />
          <ServerName />
          <ChannelInfo />
          <ChannelList />
          <UserInfo />
          <ChannelData />
          <UserList />
      </Grid>
  );
}

export default layout;