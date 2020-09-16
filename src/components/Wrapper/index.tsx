import React from 'react'
import { WrapperDiv, Title } from './styles'

interface Props {
    title?: string,
    link?: boolean,
    size?: string,
    children?: React.ReactElement
}


const Wrapper: React.FC<Props> = ({
    title = '',
    link,
    size = '',
    children
}) => {

  return (
    <WrapperDiv 
        className={size}
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
