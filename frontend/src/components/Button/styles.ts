import { shade } from 'polished';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.button`
  background: ${colors.orange};
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: ${colors.gray};
  font-weight: 600;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, colors.orange)};
  }
`;
