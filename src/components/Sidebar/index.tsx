import React from 'react'
import Logo from '../../images/logo.svg'
import { Container, LogoImage, MenuList, LinkName, Config } from './styles'
import home from '../../images/homeActive.svg'

const Sidebar: React.FC = () => {
  return (
      <Container>
          <LogoImage>
            <img src={Logo} alt="Pauta Aberta"/>
          </LogoImage>

          <MenuList>
            <LinkName>
            <img src={home} alt="homePage"/>
              Home
            </LinkName>
          </MenuList>

          <Config>
            <LinkName>
              Configurações
            </LinkName>
          </Config>

      </Container>
  )
}

export default Sidebar;