import React from 'react'
import Logo from '../../images/logo.svg'
import { Container, UpContent, LogoImage, MenuList, LinkName, Config } from './styles'
import home from '../../images/homeActive.svg'
import paper from '../../images/paper.svg'
import clients from '../../images/client.svg'
import date from '../../images/date.svg'
import money from '../../images/money.svg'
import presentation from '../../images/presentation.svg'
import config from '../../images/gear.svg'

interface Props{

  showSidebar: boolean

}

const Sidebar: React.FC<Props> = ({ showSidebar }) => {

  const show = showSidebar ? 'true' : 'false'

  return (


      <Container className={show}>

          <UpContent>

          <LogoImage>
            <img src={Logo} alt="Pauta Aberta"/>
          </LogoImage>
          
          <MenuList>
            <LinkName className='active'>
            <img src={home} alt="homePage"/>
              Home
            </LinkName>
            <LinkName>
            <img src={paper} alt="Processos"/>
              Processos
            </LinkName>
            <LinkName>
            <img src={clients} alt="Clientes"/>
              Clientes
            </LinkName>
            <LinkName>
            <img src={date} alt="Agenda"/>
              Agenda
            </LinkName>
            <LinkName>
            <img src={money} alt="Financeiro"/>
              Financeiro
            </LinkName>
            <LinkName>
            <img src={presentation} alt="Relatorios"/>
              Relatorios
            </LinkName>
          </MenuList>

          </UpContent>
          

          

          <Config>
            <LinkName>
              <img src={config} alt="Configurações"/>
              Configurações
            </LinkName>
          </Config>

      </Container>
  )
}

export default Sidebar;