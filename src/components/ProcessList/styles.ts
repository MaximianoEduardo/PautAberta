import styled from 'styled-components';

export const Process = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max(calc(100%), 482px);
    height: 55px;
    border-radius: 8px;
    padding: 7px 12px 8px 24px;
    & + &{
        margin-top: 24px;
    }
    >h3{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: auto;
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--primary);
        letter-spacing: 0.2px;
        > span{
            font-size: 0.75rem;
            letter-spacing: 0.1px;
            color: var(--third);
        }
    }
    >p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 77px;
        height: 24px;
        border-radius: 8px;
        color: var(--white);
        font-size: 0.6875rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-weight: bold;
    }
    &.high{
        border: 1px solid var(--redBorder);
        > p {
            background: var(--redBorder);
        }
    }
    &.urgency{
        border: 1px solid var(--yellow);
        > p {
            background: var(--yellow);
        }
    }
    &.default{
        border: 1px solid var(--grayBorder);
        > p {
            background: var(--grayBorder);
        }
    }
`;
