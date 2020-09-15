import React from 'react'
import Card from '../Card'
import Header from '../Header'
import { Container, Process, Title, CardWrapper} from './style'

const Home = () => {

    return (

        <Container>

            <Header />

            <Process>

                <Title>
                    Total de Processos
                </Title>

                <CardWrapper>

                    <Card  title='Em andamento' description={60} state='working' />

                    <Card  title='Resolvidos' description={16} state='done' />

                    <Card  title='Abertos' description={43} state='default' />

                    <Card  title='Aguardando' description={64} state='stopped' />

                </CardWrapper>

            </Process>

        </Container>
        

    )

}

export default Home
