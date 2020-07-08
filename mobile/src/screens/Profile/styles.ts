import { Platform } from 'react-native';

import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.lightGray};
  font-family: 'RobotoSlab-SemiBold';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  align-self: center;
  width: 186;
  height: 186px;
  border-radius: 98px;
`;
