import React from 'react';
import StickyNotesImage from './sticky-notes.png';
import toggleImage from './dark-mode.png';
import '../index.css';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={StickyNotesImage}
          alt="Sticky Notes"
          style={{ width: '50px', height: '50px' }}
        />
        <h1 style={{ marginLeft: '10px' }}>
          <span style={{ color: 'dimgray' }}>Final</span> Note App
        </h1>
      </div>
      <img
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save"
        src={toggleImage}
        alt="Dark mode toggle"
        style={{ width: '30px', height: '30px' }}
      />
    </div>
  );
};

export default Header;