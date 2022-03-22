import React, { useState } from 'react';
import './accordion.scss';

const Accordion = ({ no, title, content, img }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      {isActive && <div>{img}</div>}
    </div>
  );
};

export default Accordion;