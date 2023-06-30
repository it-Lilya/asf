import React from 'react';
import './LeftSection.css';
import { TripSetup } from './TripSetup/TripSetup';
import { LastTickets } from './LastTickets/LastTickets';

export const LeftSection = () => (
    <section className='left-section'>
      <TripSetup />
      <LastTickets />
    </section>
);
