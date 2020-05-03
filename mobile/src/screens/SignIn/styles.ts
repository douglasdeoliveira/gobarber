import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.lightGray};
  font-family: 'RobotoSlab-SemiBold';
  margin: 64px 0 24px;
`;
