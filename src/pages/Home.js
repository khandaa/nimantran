import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Plan and Manage Your Events with Nimantran</h1>
          <p>The complete event management platform for all your celebration needs</p>
          <div className="hero-cta">
            <Link to="/pricing" className="cta-button primary">Get Started</Link>
            <Link to="/features" className="cta-button secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/home/hero.jpg" alt="Event Planning" />
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Nimantran</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="icon-easy"></i>
            </div>
            <h3>Easy to Use</h3>
            <p>Simple interface designed for both professional event planners and beginners</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="icon-customizable"></i>
            </div>
            <h3>Fully Customizable</h3>
            <p>Create events that reflect your personal style with our customization options</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="icon-tracking"></i>
            </div>
            <h3>Real-time Tracking</h3>
            <p>Monitor RSVPs, attendance, and guest preferences in real-time</p>
          </div>
        </div>
      </section>

      <section className="event-types-section">
        <h2>Perfect for Any Event</h2>
        <div className="event-types-grid">
          <div className="event-type-card">
            <img src="/images/home/wedding.jpg" alt="Wedding" className="event-image" />
            <h3>Weddings</h3>
            <p>Make your special day perfect with our comprehensive wedding planning tools</p>
          </div>
          
          <div className="event-type-card">
            <img src="/images/home/corporate.jpg" alt="Corporate Events" className="event-image" />
            <h3>Corporate Events</h3>
            <p>Professional solutions for conferences, seminars, and company celebrations</p>
          </div>
          
          <div className="event-type-card">
            <img src="/images/home/birthday.jpg" alt="Birthday Parties" className="event-image" />
            <h3>Birthday Parties</h3>
            <p>Create memorable birthday celebrations with our easy-to-use planning tools</p>
          </div>
          
          <div className="event-type-card">
            <img src="/images/home/social.jpg" alt="Social Gatherings" className="event-image" />
            <h3>Social Gatherings</h3>
            <p>From reunions to holiday parties, we've got all your social events covered</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Nimantran made planning our wedding so much easier! The RSVP management saved us countless hours."</p>
            </div>
            <div className="testimonial-author">
              <h4>Priya & Rahul</h4>
              <p>Wedding, June 2025</p>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"As an event planner, I've tried many platforms, but Nimantran offers the best combination of features and ease of use."</p>
            </div>
            <div className="testimonial-author">
              <h4>Amit Shah</h4>
              <p>Professional Event Planner</p>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Our company conference was a huge success thanks to Nimantran's comprehensive management tools."</p>
            </div>
            <div className="testimonial-author">
              <h4>Deepa Mehta</h4>
              <p>HR Director, TechCorp</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Create Your Next Great Event?</h2>
          <p>Join thousands of satisfied customers who trust Nimantran for their event planning needs</p>
          <Link to="/pricing" className="cta-button primary large">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
