import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max(calc(10vw + 225px ),225px);
    height: 105px;
    border-radius: 8px;
    > span{
        font-family: 'Mulish';
        font-size: 1.1875rem;
        font-weight: bold;
        letter-spacing: 0.4px;
        padding-top: 19px;
    }
    > p{
        font-size: 2.5rem;
        font-weight: bold;
        font-family: 'Mulish';
        letter-spacing: 1px;
    }
    &.working{
        border: 1px solid var(--blueBorder);
        > p, 
        >span{
            color: var(--blueDescript);
        }
    }
    &.done{
        border: 1px solid var(--greenBorder);
        > p, 
        >span{
            color: var(--greenBorder);
        }
    }
    &.default{
        border: 1px solid var(--grayBorder);
        > p, 
        >span{
            color: var(--primary);
        }
    }
    &.stopped{
        border: 1px solid var(--redBorder);
        > p, 
        >span{
            color: var(--redBorder);
        }
    }
    @media screen and (max-width: 800px){
        width: 100%;
        margin: 0 0 24px;
    }
`;
