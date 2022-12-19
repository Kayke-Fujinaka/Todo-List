import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.blue};
    padding: 2rem 1rem 12rem;
    margin-inline: auto;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    padding-top: 2rem;
    font-size: 2rem;
    font-weight: 100;
    color: ${theme.colors.white};

    > span {
      font-weight: bold;
    }
  `}
`;
