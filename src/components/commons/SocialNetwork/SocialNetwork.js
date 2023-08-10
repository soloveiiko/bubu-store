import React from 'react';
import { Link } from 'react-router-dom';
import { facebook, instagram, youtube } from '../../../assets';
const socialNetworkList = [
  { id: '1', name: 'Instagram', logo: instagram, link: '#' },
  { id: '2', name: 'Youtube', logo: youtube, link: '#' },
  { id: '3', name: 'Facebook', logo: facebook, link: '#' },
];
const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="social-network-list">
        {socialNetworkList.map((el) => (
          <li key={el.id} className="social-network-item">
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
