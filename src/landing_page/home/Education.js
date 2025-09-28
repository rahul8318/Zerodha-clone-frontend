import React from "react";


function Education() {
  const educationResources = [
    {
      title: "Varsity",
      description: "The largest online stock market education book in the world covering everything from the basics to advanced trading.",
      link: "#",
      linkText: "Explore Varsity"
    },
    {
      title: "TradingQ&A",
      description: "The most active trading and investment community in India for all your market related queries.",
      link: "#", 
      linkText: "Join TradingQ&A"
    }
  ];

  return (  
    <section className="education-section">
      <div className="education-container">
        <div className="education-content">
          {/* Image Section */}
          <div className="education-image">
            <img 
              src="media/images/education.svg" 
              alt="Stock Market Education" 
              className="edu-img"
            />
          </div>

          {/* Content Section */}
          <div className="education-info">
            <h2 className="education-title">Free and open market education</h2>
            
            {educationResources.map((resource, index) => (
              <div key={index} className="education-resource">
                <p className="resource-description">{resource.description}</p>
                <a href={resource.link} className="resource-link">
                  {resource.linkText}
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;