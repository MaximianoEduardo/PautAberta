import React from 'react'
import { WrapperDiv, Title } from './styles'

interface Props {
    title?: string,
    link?: boolean,
    size?: string,
    column?: boolean,
    children?: any
}


const Wrapper: React.FC<Props> = ({
    title = '',
    link,
    size = '',
    column,
    children
}) => {

    const  _column =  column ? 'column' :  ''

  return (
    <WrapperDiv 
        className={size + ' ' +  _column}
    >
     <Title>
         {title}

        {

            link ? (

                <a>
                    Ver todos
                </a>

            ) : (
                <>
                </>
            )

        }
     </Title>

     {children}

    </WrapperDiv>
  )

}
export default Wrapper
