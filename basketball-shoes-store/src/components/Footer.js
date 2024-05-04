import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        {/* About Section */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>About Us</h4>
          <p style={footerParagraphStyle}>We are committed to providing the best experiences and services to our customers. Learn more about what we do and who we are.</p>
        </div>

        {/* Quick Links Section */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>Quick Links</h4>
          <ul style={footerListStyle}>
            <li><a href="/home" style={footerLinkStyle}>Home</a></li>
            <li><a href="/about" style={footerLinkStyle}>About</a></li>
            <li><a href="/services" style={footerLinkStyle}>Services</a></li>
            <li><a href="/contact" style={footerLinkStyle}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>Contact Info</h4>
          <p style={footerParagraphStyle}>Email: info@example.com</p>
          <p style={footerParagraphStyle}>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div style={footerSectionStyle}>
          <h4 style={footerHeadingStyle}>Follow Us</h4>
          <a href="https://www.facebook.com" style={footerLinkStyle}>Facebook</a> | 
          <a href="https://www.twitter.com" style={footerLinkStyle}>Twitter</a> | 
          <a href="https://www.instagram.com" style={footerLinkStyle}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  background: 'rgba(0, 0, 0, 0.85)',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0'
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px'
};

const footerSectionStyle = {
  flex: '1',
  minWidth: '150px',
  margin: '10px'
};

const footerHeadingStyle = {
  fontSize: '18px',
  margin: '0 0 10px 0'
};

const footerParagraphStyle = {
  fontSize: '14px',
  margin: '5px 0'
};

const footerListStyle = {
  listStyleType: 'none',
  padding: '0'
};

const footerLinkStyle = {
  color: 'white',
  textDecoration: 'none'
};

export default Footer;
