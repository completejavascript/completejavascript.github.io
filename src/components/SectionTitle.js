import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title }) => {
  return (
    <h2 className="section-title text-uppercase text-center"><strong>{title}</strong></h2>
  )
}

export default SectionTitle;
