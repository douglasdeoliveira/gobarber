import FeatherIcon from 'react-native-vector-icons/Feather';

import styled, { css } from 'styled-components/native';

import colors from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${colors.darkGray};
  border: 2px solid ${colors.darkGray};
  border-radius: 10px;
  margin-bottom: 8px;

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.orange};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
