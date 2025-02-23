import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  padding: 32px 0;
  background: ${colors.backgroundHeader};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: ${colors.orange};

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
