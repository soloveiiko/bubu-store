import React from 'react';
import { facebook, instagram, youtube } from '../../assets';
import { Link } from 'react-router-dom';
export const socialNetworkList = [
  { key: 'instagram', name: 'instagram', logo: instagram, link: '#' },
  { key: 'youtube', name: 'youtube', logo: youtube, link: '#' },
  { key: 'facebook', name: 'facebook', logo: facebook, link: '#' },
];
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
