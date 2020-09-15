import React from 'react';
import pay from '../../images/pay.svg'
import bell from '../../images/bell.svg'
import avatar from '../../images/header/avatar/man/m header.png'
import { Container, HeaderContent, Title, LeftContent, UserName, UserImage  } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>

        <Title>
          Home
        </Title>

      <LeftContent>

      <img src={pay} alt="Contribute"/>

      <img src={bell} alt="Notificaçoes"/>

      <span></span>

      <UserName>
          Marcos Andrade
      </UserName>

      <UserImage>
        <img src={avatar} alt="Usuario"/>
      </UserImage>

      </LeftContent>

      </HeaderContent>
    </Container>
  );
};

export default Header;
