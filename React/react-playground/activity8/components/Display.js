import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <div>
      <Card
      {...canine}
      />
    </div>
  );
}
