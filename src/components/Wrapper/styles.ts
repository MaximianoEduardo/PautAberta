import styled from "styled-components"

export const WrapperDiv = styled.div`
    display: flex;
    width: auto;
    height: auto;
    background: var(--white);
    border: 1px solid var(--grayBorder);
    border-radius: 8px;
    padding: 24px 27px;
    justify-content: space-between;
    & + &{
        margin-top: min(calc(100% - 11px),11px);
    }
    &.column{
        flex-direction: column;
    }
    &.fullWidth{
        width: 100%;
    }
    &.small{
        width: max(calc(50vw), 546px);
        margin: 0;
        & + &{
            margin-left: 30px;
        }
        @media screen and (max-width: 800px){
            width: 100%;
            & + &{
                margin: 30px 0;
            }
        }
    }
`

export const Title = styled.h2`
    font-size: 1.1875rem;
    font-family: 'Mulish';
    font-weight: bold;
    color: var(--primary);
    letter-spacing: 0.4px;
    padding-bottom: min(calc(10vw + 17px), 17px);
    display: flex;
    width: 100;
    justify-content: space-between;
    align-items: center;
    > a  {
        color: var(--secondary);
        font-weight: bold;
        font-size:  0.875rem;
        letter-spacing: 0.2px;
    }
`