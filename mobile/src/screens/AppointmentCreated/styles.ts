import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: ${colors.lightGray};
  font-size: 32px;
  font-family: 'RobotoSlab-SemiBold';
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  color: #999591;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${colors.orange};
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  color: ${colors.gray};
  font-size: 18px;
  font-family: 'RobotoSlab-SemiBold';
`;
