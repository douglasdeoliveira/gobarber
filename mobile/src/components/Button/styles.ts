import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: ${colors.orange};
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.gray};
  font-family: 'RobotoSlab-SemiBold';
`;
