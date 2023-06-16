import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="about-us">
              <h3>About us</h3>
              <p>With passion and a zest for life, we are a team of young, enthusiastic, and dynamic programmers. We believe in the transformative power of technology and strive to create groundbreaking and meaningful solutions. Here, we not only develop exceptional products and services, but also foster a supportive community where individuals can share and explore together. With relentless innovation, we are passionate about crafting unique and exciting experiences for our customers. Join us on this journey as we unlock the boundless potential of technology, together.</p>
            </div>
            <div className="link-contract">
              <h3>Link contract</h3>
              <p><a href="https://www.facebook.com/profile.php?id=100022452030724">https://www.facebook.com/profile.php?id=100022452030724</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
