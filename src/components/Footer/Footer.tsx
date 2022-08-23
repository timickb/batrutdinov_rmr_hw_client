import React from 'react';
import '@/components/Footer/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div>&copy; 2022 Kitty</div>
      </div>
      <div className="footer-right">
        <a href="terms" className="footer-menu-item">
          Terms
        </a>
        <a href="privacy" className="footer-menu-item">
          Privacy
        </a>
        <a href="security" className="footer-menu-item">
          Security
        </a>
        <a href="spinner" className="footer-menu-item">
          Spinner
        </a>
        <a href="about" className="footer-menu-item">
          About
        </a>
      </div>
    </div>
  );
}
