import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    font-size: 15px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: white;
    }
  }

`;

export const HashtagIcon = styled(Hashtag)`
  height: 20px;
  width: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  height: 16px;
  width: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;
  &:hover {
    color: white;
  }
`;

export const SettingsIcon = styled(Settings)`
  height: 20px;
  width: 20px;
  margin-left: 4px;

  color: var(--symbol);

  transition: color .2s;
  &:hover {
    color: white;
  }
`;
