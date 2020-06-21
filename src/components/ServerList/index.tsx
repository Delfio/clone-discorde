import React from 'react';

import ServerButton from '../ServerBottom';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton 
            isHome={true} 
            hasNotification={false} 
            metions={0} 
            selected={false} 
          />
          <Separator />

          <ServerButton 
            isHome={false} 
            hasNotification={false} 
            metions={2} 
            selected={false} 
          />
          <ServerButton
            isHome={false} 
            hasNotification={true} 
            metions={2} 
            selected={false} 
          />
          <ServerButton
            isHome={false} 
            hasNotification={false} 
            metions={5} 
            selected={false} 
          />
          <ServerButton
            isHome={false} 
            hasNotification={true} 
            metions={2} 
            selected={false} 
          />
          <ServerButton
            isHome={false} 
            hasNotification={true} 
            metions={2} 
            selected={false} 
          />
      </Container>
  );
}

export default ServerList;