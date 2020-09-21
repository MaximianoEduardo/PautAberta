import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--white);
    box-shadow: -4px 0px 19px 8px rgba(0, 0, 0, 0.15);
    height: 100vh;
    width: 255px;
    flex-direction: column;
    justify-content: space-between;
    &.false{
        display: none
    }
`

export const UpContent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
`

export const LogoImage = styled.div`
    padding:  30px 21px 0 17px;
    width: 100%;
    height: auto;
    flex-shrink: 0;
    >img{
        width: 217px;
        height: 74px;
    }
`

 export const  MenuList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    padding-top: min(calc(10vw + 39px), 39px);
 `

 export const  LinkName = styled.h2`
    display: flex;
    align-items: center;
    height: 62px;
    width: 100%;
    font-size: 1.25rem;
    font-weight: normal;
    font-family: 'Mulish';
    color: var(--description);
    letter-spacing: 0.2px;
    transition: 300ms ease-in-out;
    &.active, &:hover{
        color: var(--menuTitle);
        font-weight: 800;
        background: var(--gray);
    }
    & + &{
        border-bottom: 1px solid var(--menuBorder);
    }
    >img{
        margin-left: 32px;
        margin-right: 18px;
        display: inline-block;
        width: 25px;
        height: 23px;
    }
 `

 export const  Config = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--menuBorder);

 `
