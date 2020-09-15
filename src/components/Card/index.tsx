import React from 'react';

import { CardStyled } from './styles'

interface Props {
    title: string,
    description: number
    state: string
  }
  
const Card: React.FC<Props> = ({
    title = '',
    description = '',
    state = 'default'
}) => {

  return (

    <CardStyled 
        className={`button 
            ${state} 
          `}
    >
        <span>{ title }</span>
        <p> { description } </p>
    </CardStyled>

  )

}
export default Card
