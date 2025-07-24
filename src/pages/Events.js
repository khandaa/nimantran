import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Events.css';

function Events() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="events-page">
      <h1>Our Events</h1>
      <p>Explore the different types of events managed through Nimantran platform</p>
      
      {/* Featured Event */}
      <div className="featured-event">
        <div className="featured-image">
          <img src="/src/images/events/wedding-event.jpg" alt="Tech Conference 2025" />
        </div>
        <div className="featured-content">
          <h2>Annual Tech Conference 2025</h2>
          <p>Experience the most awaited tech conference of the year with industry leaders, workshops, and networking opportunities. Managed seamlessly with Nimantran.</p>
          
          <div className="featured-meta">
            <div className="meta-item">
              <div className="meta-icon"></div>
              <span>Sept 15-17, 2025</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon"></div>
              <span>Bengaluru Convention Center</span>
            </div>
          </div>
          
          <Link to="/contact" className="cta-button primary">Learn More</Link>
        </div>
      </div>
      
      {/* Events Categories */}
      <div className="events-categories">
        <div className="category-tabs">
          <div 
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Events
          </div>
          <div 
            className={`category-tab ${activeCategory === 'weddings' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('weddings')}
          >
            Weddings
          </div>
          <div 
            className={`category-tab ${activeCategory === 'corporate' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('corporate')}
          >
            Corporate
          </div>
          <div 
            className={`category-tab ${activeCategory === 'birthdays' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('birthdays')}
          >
            Birthdays
          </div>
          <div 
            className={`category-tab ${activeCategory === 'social' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('social')}
          >
            Social Gatherings
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="events-grid">
          {/* Event Card 1 */}
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/wedding1.jpg" alt="Wedding Planning" />
            </div>
            <div className="event-details">
              <h3>Wedding Planning Workshop</h3>
              <p>Learn how to use Nimantran for planning your perfect wedding day.</p>
              <div className="event-meta">
                <span>August 10, 2025</span>
                <span>Virtual</span>
              </div>
              <Link to="/contact" className="event-action">Register Now</Link>
            </div>
          </div>
          
          {/* Event Card 2 */}
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/corporate1.jpg" alt="Corporate Event Management" />
            </div>
            <div className="event-details">
              <h3>Corporate Event Management</h3>
              <p>Streamline your company events with our powerful management tools.</p>
              <div className="event-meta">
                <span>September 5, 2025</span>
                <span>Delhi</span>
              </div>
              <Link to="/contact" className="event-action">Register Now</Link>
            </div>
          </div>
          
          {/* Event Card 3 */}
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/birthday1.jpg" alt="Birthday Party Planning" />
            </div>
            <div className="event-details">
              <h3>Birthday Party Planning</h3>
              <p>Create memorable birthday celebrations with minimal stress.</p>
              <div className="event-meta">
                <span>October 15, 2025</span>
                <span>Mumbai</span>
              </div>
              <Link to="/contact" className="event-action">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event Types Sections */}
      <section id="weddings" className="event-type-section">
        <h2>Weddings</h2>
        <p>Make your special day perfect with our comprehensive wedding planning tools</p>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/wedding2.jpg" alt="Digital Wedding Invitations" />
            </div>
            <div className="event-details">
              <h3>Digital Wedding Invitations</h3>
              <p>Create beautiful digital invitations that reflect your personal style.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/wedding1.jpg" alt="Guest List Management" />
            </div>
            <div className="event-details">
              <h3>Guest List Management</h3>
              <p>Easily manage your guest list, RSVPs, and seating arrangements.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="corporate" className="event-type-section">
        <h2>Corporate Events</h2>
        <p>Professional solutions for conferences, seminars, and company celebrations</p>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/corporate1.jpg" alt="Conference Management" />
            </div>
            <div className="event-details">
              <h3>Conference Management</h3>
              <p>Streamline registration, agenda planning, and attendee management.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/corporate2.jpg" alt="Corporate Team Building" />
            </div>
            <div className="event-details">
              <h3>Corporate Team Building</h3>
              <p>Organize engaging team events with comprehensive planning tools.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="birthdays" className="event-type-section">
        <h2>Birthday Parties</h2>
        <p>Create memorable birthday celebrations with our easy-to-use planning tools</p>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/birthday1.jpg" alt="Kids Birthday Parties" />
            </div>
            <div className="event-details">
              <h3>Kids Birthday Parties</h3>
              <p>Plan the perfect celebration for children of all ages.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/birthday2.jpg" alt="Milestone Celebrations" />
            </div>
            <div className="event-details">
              <h3>Milestone Celebrations</h3>
              <p>Create special memories for significant birthday milestones.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="social" className="event-type-section">
        <h2>Social Gatherings</h2>
        <p>From reunions to holiday parties, we've got all your social events covered</p>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/social1.jpg" alt="Family Reunions" />
            </div>
            <div className="event-details">
              <h3>Family Reunions</h3>
              <p>Bring everyone together with organized planning and communications.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image">
              <img src="/images/events/social2.jpg" alt="Holiday Celebrations" />
            </div>
            <div className="event-details">
              <h3>Holiday Celebrations</h3>
              <p>Plan festive gatherings that everyone will remember.</p>
              <Link to="/features" className="event-action">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
