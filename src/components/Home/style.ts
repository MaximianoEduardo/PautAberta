import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    min-width: max(calc(100vw - 255px),255px);
    background: var(--bgColor);
    padding: 26px 30px;
    .site-calendar-demo-card {
        width: 519px;
        border: 1px solid var(--grayBorder);
        border-radius: 8px;
        .ant-picker-content{
            thead{
                padding-top: 19px;
                padding-bottom: 22px;
                width: 150px;
                tr{
                   
                }
            }
        }
    }
`

export const Row = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    padding-top: min(calc(100% - 29px), 29px) ;
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

export const  LastProcess = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: var(--white);
    border: 1px solid var(--grayBorder);
    border-radius: 8px;
    padding: 24px 27px;
`

export const  ProcessWrapper  = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: min(calc( 10vw + 23px), 23px);
    width: 100%;
`
export const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    width: 49.9%;
    height: auto;
    h2{
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
    }
    .taskWrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`