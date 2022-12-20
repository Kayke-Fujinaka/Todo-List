import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    max-width: 1120px;
    margin-top: -10rem;
    margin-inline: auto;
    padding: 70px 60px;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > h3 {
      font-size: 2.25rem;
      color: ${theme.colors.text_title};
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      input {
        flex: 1;
        padding: 12px 24px;
        color: ${theme.colors.text};
        background-color: ${theme.colors.background};
        border: 0;
        border-radius: 8px;

        &::placeholder {
          color: ${theme.colors.text_light};
        }
      }

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        background: ${theme.colors.green};
        color: #fff;
        font-weight: 600;
        border: 0;
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: 3rem;

    ul {
      list-style: none;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        padding: 1rem 0;

        div {
          display: flex;
          align-items: center;
          gap: 14px;
          outline: 0;

          p {
            font-size: 1rem;
            color: var(--text);
          }

          &.completed {
            p {
              text-decoration: line-through;
              opacity: 0.6;
            }
          }

          .checkbox-container {
            display: block;
            position: relative;
            padding-left: 14px;
            margin-bottom: 18px;

            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;

              &:checked {
                & ~ .checkmark {
                  background-color: ${theme.colors.blue};
                }

                & ~ .checkmark:after {
                  display: block;
                }
              }
            }

            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              width: 16px;
              height: 16px;
              background-color: ${theme.colors.background};
              border-radius: 2px;

              &:after {
                content: "";
                position: absolute;
                display: none;
                left: 6px;
                top: 3px;
                width: 3px;
                height: 6px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
              }
            }
          }
        }

        button {
          background: transparent;
          border: 0;

          svg {
            color: ${theme.colors.red};
          }

          &:hover {
            svg {
              filter: brightness(0.5);
            }
          }
        }
      }
    }
  `}
`;
