import React from 'react';
import '../stylesheets/Features.css';

function Features() {
  return (
    <div className="features-page">
      <section className="hero-section">
        <h1>Features</h1>
        <p>Everything you need to create memorable events</p>
      </section>
      
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/images/icons/invite.svg" alt="Invitations" className="feature-icon-img" />
          </div>
          <h3>Beautiful Invitations</h3>
          <p>Create stunning digital invitations with our customizable templates.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/images/icons/rsvp.svg" alt="RSVP" className="feature-icon-img" />
          </div>
          <h3>RSVP Management</h3>
          <p>Track responses, dietary preferences, and plus-ones with ease.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/images/icons/guest.svg" alt="Guest Management" className="feature-icon-img" />
          </div>
          <h3>Guest Management</h3>
          <p>Organize your guests into groups, tables, and send targeted communications.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/images/icons/analytics.svg" alt="Analytics" className="feature-icon-img" />
          </div>
          <h3>Event Analytics</h3>
          <p>Get insights on response rates, guest preferences, and event engagement.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/images/icons/mobile.svg" alt="Mobile" className="feature-icon-img" />
          </div>
          <h3>Mobile Friendly</h3>
          <p>Your events look great on any device with our responsive design.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/images/icons/checkin.svg" alt="Check-in" className="feature-icon-img" />
          </div>
          <h3>Check-in System</h3>
          <p>Streamline arrival with our digital check-in system for your events.</p>
        </div>
      </section>
    </div>
  );
}

export default Features;
