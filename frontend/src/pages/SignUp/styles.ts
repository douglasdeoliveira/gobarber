import { shade } from 'polished';
import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-up-background.png';
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
  }

  > a {
    display: flex;
    align-items: center;
    color: ${colors.lightGray};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, colors.lightGray)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
