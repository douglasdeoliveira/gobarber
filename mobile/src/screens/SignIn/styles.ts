import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.lightGray};
  font-family: 'RobotoSlab-SemiBold';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  color: ${colors.lightGray};
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  left: 0%;
  right: 0;
  bottom: 0;
  background: ${colors.gray};
  border-top-width: 1px;
  border-color: ${colors.darkGray};
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.orange};
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
