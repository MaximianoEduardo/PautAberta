import React from 'react'
import Card from '../Card'
import Header from '../Header'
import { Container, CardWrapper, ProcessWrapper, Row} from './style'
import ProcessList from '../ProcessList'
import Wrapper from '../Wrapper'
import Activities from '../Activities'
import TodoApp from '../Todo'

const Home = () => {

    return (

        <Container>

            <Header />

            <Wrapper 
                title= 'Total de Processos'
                size='fullWidth'
                column
            >

                <CardWrapper>

                <Card  title='Em andamento' description={60} state='working' />

                <Card  title='Resolvidos' description={16} state='done' />

                <Card  title='Abertos' description={43} state='default' />

                <Card  title='Aguardando' description={64} state='stopped' />

                </CardWrapper>


            </Wrapper>


            <Wrapper
                title='Agenda'
                size='fullWidth'
                column
            >
        
                

                    <div className="taskWrapper">

                        <Activities
                            title='Reunião PautAberta'
                            date='9:00 AM — 10:00 AM'
                            description='Reunião para decidir métricas'
                            state='stoped'
                        />
                        <Activities
                            title='Reunião PautAberta'
                            date='9:00 AM — 10:00 AM'
                            description='Reunião para decidir métricas'
                            state='urgency'
                        />
                        <Activities
                            title='Reunião PautAberta'
                            date='9:00 AM — 10:00 AM'
                            description='Reunião para decidir métricas'
                            state='default'
                        />
                        <Activities
                            title='Reunião PautAberta'
                            date='9:00 AM — 10:00 AM'
                            description='Reunião para decidir métricas'
                            state='done'
                        />


                    </div>


            </Wrapper>


            <Row>
                <Wrapper
                    title='Ultimos processos'
                    link
                    column
                    size='small'
                >
                    <ProcessWrapper>
                        <ProcessList id={48839482} state='urgency' update='Atualizado 1 dia atrás' />
                        <ProcessList id={48839482} state='high' update='Atualizado 1 dia atrás' />
                        <ProcessList id={48839482} state='default' update='Atualizado 1 dia atrás' />

                    </ProcessWrapper>

                </Wrapper>


                <Wrapper
                    title='Tarefas'
                    link
                    column
                    size='small'
                >
                    <TodoApp />
                </Wrapper>
            </Row>

            


        </Container>
        

    )

}

export default Home
