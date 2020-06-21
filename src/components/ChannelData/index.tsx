import React, { useRef, useEffect } from 'react';
import ChannelMessages from '../ChannelMessages';
import { Mention } from '../ChannelMessages/styles';


import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
      <Container>
        <Messages ref={messagesRef}>
          {Array.from(Array(15).keys()).map((n) => (
            <ChannelMessages 
              key={n}
              author="Delfio Francisco"
              content="teste de mensagem 123 teste 123"
              date={"21/06/2020"}
            />
          ))}

          <ChannelMessages 
            author="Delfio bot"
            content={
              <>
                <Mention>@Delfio Francisco</Mention> teste 123
              </>
            }
            date={"21/06/2020"}
            isBot
          />
        </Messages>

        <InputWrapper>
          <Input placeholder="Conversar em #54d5f4" />
          <InputIcon />
        </InputWrapper>
      </Container>
  );
}

export default ChannelData;