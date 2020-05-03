import styled, { css } from 'styled-components';

import colors from '../../styles/colors';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: ${colors.darkGray};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;
  border: 2px solid ${colors.darkGray};

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${colors.orange};
      border-color: ${colors.orange};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.orange};
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${colors.lightGray};

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.error};
    color: #fff;

    &::before {
      border-color: ${colors.error} transparent;
    }
  }
`;
