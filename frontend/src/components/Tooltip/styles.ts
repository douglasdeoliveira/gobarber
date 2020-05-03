import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.orange};
    color: ${colors.gray};
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.4s;
    visibility: hidden;

    ::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: ${colors.orange} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
