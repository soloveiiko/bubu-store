import React from 'react';
import { Link } from 'react-router-dom';
import { socialNetworkList } from '../../utils/data';

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="social-network-list">
        {socialNetworkList.map((el) => (
          <li key={el.key} className="social-network-item">
            <Link to={el.link}>
              <img src={el.logo} alt={el.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialNetwork;
