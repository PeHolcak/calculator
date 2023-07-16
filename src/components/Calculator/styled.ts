import styled from "styled-components"

export const CalculatorWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertialy};
`   

export const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.tertialy};
    border: 1px solid ${({theme}) => theme.colors.secondary};
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
`   