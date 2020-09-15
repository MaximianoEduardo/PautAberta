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

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
`

export const Title = styled.h1`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--primary);
`

export const LeftContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: max(calc(10vw + 15px), 400px);
    .pay{
        display: inline-block;
        width: 30px;
        height: 33.95px;
        margin-right: 35.56px;
    }
    .bell{
        position: absolute;
        display: inline-block;
        width: 21.88px;
        height: 25px;
        &:before{
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background: var(--redBorder);
            position: relative;
        }
    }
    >img{
        flex-shrink: 0;
        object-fit: contain;
    }
    >span{
        width: 1px;
        height: 32px;
        background: var(--grayBorder);
        margin: 0 16px 0 0;
    }
`

export const UserName = styled.h2`
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 600;
    font-family: 'Mulish';
`

export const UserImage = styled.div`
    display: inline-block;
    width: 44px;
    height: 44px;
    > img{
        width: 100%;
        border: 1px solid var(--gray);
        border-radius: 50%;
    }
`
