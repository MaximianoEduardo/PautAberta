import styled from "styled-components"

export const Container = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
  border-radius: 10px;
  border: 1px solid var(--grayBorder); 
  position: relative;
  padding: 0 11px 0 15px;
  p{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: 600;
      color: var(--primary);
      >span{
          font-size: 0.8125rem;
          letter-spacing: 0.12px;
          color: var(--third);
      }
  }
  span{
      font-size: 0.8125rem;
      color: var(--activeDescription);
      letter-spacing: 0.12px;
  }
  & + &{
      margin-top: min(calc(10vw - 14.42px), 14.42px);
  }
  &::before{
      content: '';
      display: inline-block;
      width: 8px;
      height: 100%;
      position: absolute;
      left: 0;
      border-radius: 10px 0 0 10px;
  }
  &.urgency{
      &::before{
          background: var(--yellow);
      }
  }
  &.done{
      &::before{
          background: var(--greenBorder);
      }
  }
  &.default{
      &::before{
          background: var(--menuTitle);
      }
  }
  &.stoped{
      &::before{
          background: var(--redBorder);
      }
  }

`