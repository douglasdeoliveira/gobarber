import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div``;

export const Content = styled.main`
  display: flex;
  max-width: 1120px;
  margin: 64px auto;
`;

export const Schedule = styled.section`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: ${colors.orange};

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${colors.orange};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: ${colors.textGray};
    font-size: 20px;
    font-weight: 400px;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      background: ${colors.orange};
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: auto;
      color: ${colors.textGray};

      svg {
        color: ${colors.orange};
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
    color: ${colors.textGray};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: ${colors.lightGray};

    svg {
      color: ${colors.orange};
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;
