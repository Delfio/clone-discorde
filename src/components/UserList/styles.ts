import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  
  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px);

/* Configurações do scrollbar */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;

  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 5px;
  padding: 5px;

  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  
  transition: background .2s;

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: white;
    opacity: 0.7;

    /* Para nomes grande */
    white-space: nowrap; /* Não vai deixar quebrar linha */
    text-overflow: ellipsis; /* Vai preencher o que faltar com ...*/
    overflow: hidden; /* Vai esconder o ecesso */
  }

  >span {
    margin-left: 9px;

    background-color: var(--discord);

    color: white;
    padding: 4px 5px;
    border-radius: 4px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;


