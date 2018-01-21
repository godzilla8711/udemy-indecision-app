import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return (
    <div className='header'>
      <div className='container'>
        <h2 className='header__title'>{props.title}</h2>
        <p className='header__subtitle'>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Header;
