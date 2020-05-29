import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';

import Header from '../../components/Header';
import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Header />

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="" alt="" />

              <strong>Douglas</strong>
              <span>
                <FiClock />
                8:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img src="" alt="" />
                <strong>Douglas</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
