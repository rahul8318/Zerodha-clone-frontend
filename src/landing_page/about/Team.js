import React from "react";
import { Link } from "react-router-dom";


function Team() {
  const teamMembers = [
    {
      name: "Nithin Kamath",
      role: "Founder & CEO",
      image: "media/images/nithinKamath.jpg",
      bio: [
        "Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.",
        "He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).",
        "Playing basketball is his zen."
      ],
      socialLinks: [
        { name: "Homepage", url: "#" },
        { name: "TradingQnA", url: "#" },
        { name: "Twitter", url: "#" }
      ]
    }
    // You can add more team members here in the future
  ];

  return (  
    <section className="team-section">
      <div className="team-container">
        {/* Section Header */}
        <div className="team-header">
          <h1 className="team-title">People</h1>
          <p className="team-subtitle">The minds behind India's largest stock broker</p>
        </div>

        {/* Team Members */}
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image-section">
              <div className="image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="member-info-section">
              <div className="member-header">
                <h2 className="member-name">{member.name}</h2>
                <h3 className="member-role">{member.role}</h3>
              </div>

              <div className="member-bio">
                {member.bio.map((paragraph, paraIndex) => (
                  <p key={paraIndex} className="bio-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="member-social">
                <span className="social-label">Connect on:</span>
                <div className="social-links">
                  {member.socialLinks.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                      {socialIndex < member.socialLinks.length - 1 && <span className="separator">/</span>}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* View More Team CTA */}
        <div className="team-cta">
          <Link to="/team" className="cta-button">
            View full team →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Team;