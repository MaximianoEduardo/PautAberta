import React from 'react'
import { Container } from './styles'


interface Props{

    title: string
    date: string
    description?: string
    state: string
}


const  Activities:React.FC<Props> = ({

    title,
    date,
    ...rest

}) => {
  return(

    <Container 
      className={rest.state}
    >

      <p>
          {title}
          <span>
            {date}
          </span>
      </p>

    <span>
      {rest.description}
    </span>

    </Container>
  )
}

export default Activities;