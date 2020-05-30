import { shade } from 'polished';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    height: 144px;
    background: ${colors.backgroundHeader};

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;
        color: ${colors.textGray};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -176px auto 0;

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 32px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${colors.orange};
    border: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${colors.gray};
    }

    &:hover {
      background: ${shade(0.2, colors.orange)};
    }
  }
`;
