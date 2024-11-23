import Image from 'next/image';
import './HeroPage.css';

const HeroPage = () => {
  return (
    <div className="container">
      {/* Top Section: Image and DJ KAL$ */}
      <div className="header-section">
        {/* DJ Image */}
        <div className="dj-image">
          <Image
            src="/assets/dj-photo.png" // Replace with your actual image path
            alt="DJ Kal$"
            layout="responsive"
            width={400}
            height={600}
            className="dj-photo"
          />
        </div>

        {/* DJ KAL$ Text */}
        <div className="dj-title">
          <h1 className="hero-title">DJ KAL$</h1>
          <h1 className="hero-title">DJ KAL$</h1>
          <h1 className="hero-title">DJ KAL$</h1>
          <h1 className="hero-title">DJ KAL$</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Disc Jockey Title with Line */}
        <div className="disc-jockey-wrapper">
          <div className="line"></div>
          <h2 className="disc-jockey-title">DISC JOCKEY</h2>
          <div className="line"></div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats">
            <p className="stats-title">2K+ FOLLOWERS</p>
            <p className="stats-subtitle">INSTAGRAM</p>
          </div>
          <div className="stats">
            <p className="stats-title">1.5K+ LIKES</p>
            <p className="stats-subtitle">TIK TOK</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <p className="contact-info">📞 +1 (470)-469-2141</p>
          <p className="contact-info">📧 DJKALZBOOKINGS@GMAIL.COM</p>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="footer-logo">
        <Image
          src="/assets/logo.png" // Replace with your actual logo path
          alt="Footer Logo"
          width={900}
          height={900}
        />
      </div>
    </div>
  );
};

export default HeroPage;