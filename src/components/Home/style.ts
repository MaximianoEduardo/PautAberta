import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    min-width: max(calc(100vw - 255px),255px);
    background: var(--bgColor);
    padding: 26px 30px;
`

export const Process = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: var(--white);
    border: 1px solid var(--grayBorder);
    border-radius: 8px;
    padding: 24px 27px;
`
export const Title = styled.h2`
    font-size: 1.1875rem;
    font-family: 'Mulish';
    font-weight: bold;
    color: var(--primary);
    letter-spacing: 0.4px;
    padding-bottom: min(calc(10vw + 17px), 17px);
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    > div{
        margin-right: 52px;
        &:last-child{
            margin-right: unset;
        }
    }
`