import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const AnimatedIcon = () => (
    <section>
      <div className="fa-3x">
        <FontAwesomeIcon icon={faCog} spin />
      </div>
    </section>
);
export default AnimatedIcon;