import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  >form{
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid var(--grayBorder);
      >input{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 58px;         
          border: none;
          color: var(--primary);
      }
      > button{
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        background: var(--buttonBackground);
        .fill{
          svg{
            fill: #9FA2B4;
          }
        }
      }
  }
  
`