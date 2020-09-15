import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    box-shadow: -4px 0px 19px 8px rgba(0, 0, 0, 0.15);
    height: 100%;
    width: 255px;
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
    padding-top: min(calc(10vw - 39px), 39px);
 `

 export const  LinkName = styled.h2`
    display: flex;
    align-items: center;
    height: 62px;
    width: 100%;
    font-weight: 1.25rem;
    font-family: 'Mulish';
    font-weight: 800;
    color: var(--menuTitle);
    & + &{
        border: 1px solid var(--menuBorder);
    }
    >img{
        padding-left: 32px;
        padding-right: 15px;
         display: inline-block;
         width: 25px;
         height: 23px;
    }
 `

 export const  Config = styled.div`
 `
