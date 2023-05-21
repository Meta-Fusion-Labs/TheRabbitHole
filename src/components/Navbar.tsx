import React, { CSSProperties } from 'react';

const navbarStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  backgroundColor: 'black',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
};

const logoButtonStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const logoImageStyles: CSSProperties = {
  height: '2rem',
  marginRight: '0.5rem',
};

const logoTextStyles: CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
};

const buttonStyles: CSSProperties = {
  marginRight: '1rem',
  backgroundColor: '#4B0082',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
};

const Navbar: React.FC = () => {
  return (
    <nav style={navbarStyles}>
      <button
        style={logoButtonStyles}
        onClick={() => (window.location.href = 'https://www.metafusionlabs.ai')}
      >
        <img src="/Fluf_B&W.png" alt="" style={logoImageStyles} />
        <h1 style={logoTextStyles}>The Rabbit Hole</h1>
      </button>
      <div>
        <button style={buttonStyles}>Connect Wallet</button>
        <button style={buttonStyles}>FuturePass</button>
        <button style={buttonStyles}>Mint NFT</button>
        <button style={buttonStyles}>Explore</button>
      </div>
    </nav>
  );
};

export default Navbar;
