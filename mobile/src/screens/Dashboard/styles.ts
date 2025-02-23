import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

import colors from '../../styles/colors';
import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.lightGray};
  font-size: 24px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const Username = styled.Text`
  color: ${colors.orange};
  font-family: 'RobotoSlab-SemiBold';
`;

export const ProbileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  margin-bottom: 24px;
  color: ${colors.lightGray};
  font-size: 24px;
  font-family: 'RobotoSlab-SemiBold';
`;

export const ProviderContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-SemiBold';
  font-size: 18px;
  color: ${colors.lightGray};
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;
