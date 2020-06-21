import React from 'react';
import LogoRocketSet from '../../assets/logo-rocketseat.svg';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotification: boolean;
    metions?: number;
}

const ServerBottom: React.FC<Props> = ({
  hasNotification,
  isHome,
  metions,
  selected 
}) => {
  return (
      <Button
        isHome={isHome}
        hasNotification={hasNotification}
        metions={metions}
        selected={selected}
      >
          {isHome && (
              <img src={LogoRocketSet} alt="logoServerPrincipal"/>
          )}
      </Button>
  );
}

export default ServerBottom;