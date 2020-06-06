import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import { Container, Label } from './styles';

export default function CountdownBoard() {
  const [atual, setAtual] = useState(new Date());

  useEffect(() => {
    setInterval(() => setAtual(new Date()), 1000);
  }, []);

  function pad(number, length) {
    let str = `${number}`;
    while (str.length < length) {
      str = `0${str}`;
    }
    return str;
  }

  function addDays(date, days) {
    const result = date;
    result.setDate(result.getDate() + days);
    return result;
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Hora do Almoço</span>;
    }
    return (
      <span>
        {pad(hours, 2)}:{pad(minutes, 2)}:{pad(seconds, 2)}
      </span>
    );
  };

  const meioDiaHoje = atual.setHours(12, 0, 0, 0);
  if (atual < meioDiaHoje) {
    return (
      <Container>
        <Label>Para o Almoço</Label>
        <Countdown date={meioDiaHoje} renderer={renderer} />
      </Container>
    );
  }

  return (
    <Container>
      <Label>Para o Almoço</Label>
      <Countdown
        date={addDays(new Date(), 1).setHours(12, 0, 0, 0)}
        renderer={renderer}
      />
    </Container>
  );
}

CountdownBoard.propTypes = {};
