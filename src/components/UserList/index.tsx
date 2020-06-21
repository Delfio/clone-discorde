import React from 'react';
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => (
  <User>
    <Avatar className={isBot? 'bot': ''} />

    <strong>{nickname}</strong>

    {isBot && <span>Bot</span>}
  </User>
)

const UserList: React.FC = () => {
  return (
      <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Delfio Francisco"/>

        <Role>Offline - 10</Role>
        <UserRow nickname="Delfio Francisco" isBot/>

        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
                
        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
                
        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
                
        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
                
        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
                
        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
                
        <Role>Offline - 10</Role>
        <UserRow nickname="Fulano"/>
      </Container>  
  );
}

export default UserList;