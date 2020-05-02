import { shade } from 'polished';
import styled from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.png';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: ${colors.darkGray};
      border-radius: 10px;
      border: 2px solid ${colors.darkGray};
      padding: 16px;
      width: 100%;
      color: ${colors.lightGray};

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: ${colors.orange};
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: ${colors.gray};
      font-weight: 600;
      margin-top: 24px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, colors.orange)};
      }
    }

    a {
      display: block;
      color: ${colors.lightGray};
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, colors.lightGray)};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: ${colors.orange};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, colors.orange)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
