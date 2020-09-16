import React from 'react'
import { Process } from './styles'


interface Props{

  id: number,
  update: string,
  state: string

}

const ProcessList: React.FC<Props> = (
    {
      id = '', 
      update= '',
      state ='' 
    }) => {
    
      return (
          <Process
              className={`${state}`}
            >
              
              <h3>
                {id}
                <span>{update}</span>
              </h3>

             <p>{state}</p>

          </Process>
      )
}

export default ProcessList
