import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Pricing.css';

function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that works best for your events</p>
      </section>
      
      <section className="pricing-plans">
        <div className="pricing-card basic">
          <div className="plan-header">
            <h3>Basic</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">499</span>
              <span className="period">/month</span>
            </div>
            <p>Perfect for small events</p>
          </div>
          
          <ul className="features-list">
            <li>Up to 100 guests</li>
            <li>Basic invitation templates</li>
            <li>Simple RSVP management</li>
            <li>Email support</li>
            <li>Mobile-friendly</li>
          </ul>
          
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
        
        <div className="pricing-card professional">
          <div className="plan-header">
            <h3>Professional</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">999</span>
              <span className="period">/month</span>
            </div>
            <p>Great for medium-sized events</p>
          </div>
          
          <ul className="features-list">
            <li>Up to 250 guests</li>
            <li>Premium invitation templates</li>
            <li>Advanced RSVP management</li>
            <li>Guest messaging</li>
            <li>Priority email support</li>
            <li>Custom branding</li>
          </ul>
          
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
        
        <div className="pricing-card enterprise">
          <div className="plan-header">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">1999</span>
              <span className="period">/month</span>
            </div>
            <p>Perfect for large events</p>
          </div>
          
          <ul className="features-list">
            <li>Unlimited guests</li>
            <li>All invitation templates</li>
            <li>Complete RSVP management</li>
            <li>Advanced analytics</li>
            <li>Dedicated account manager</li>
            <li>Custom features</li>
            <li>24/7 phone & email support</li>
          </ul>
          
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </section>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I change plans later?</h4>
            <p>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer refunds?</h4>
            <p>We offer a 14-day money-back guarantee if you're not satisfied.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a free trial?</h4>
            <p>Yes, all plans come with a 7-day free trial.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, UPI, and net banking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
