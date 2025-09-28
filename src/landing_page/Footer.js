import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  const companyLinks = [
    "About", "Product", "Pricing", "Referral Programme", "Careers", 
    "Zerodha tech", "Press & media", "Zerodha Cares (CSR)"
  ];

  const supportLinks = [
    "Contact", "Support Portal", "Z-Connect blogs", 
    "List of Charges", "Download & resources"
  ];

  const accountLinks = [
    "Open an account", "Fund Transfer", "60 days challenge"
  ];

  const bottomLinks = [
    "NSE", "BSE", "MCX", "Terms & conditions", "Policies & procedures", 
    "Privacy policy", "Disclosure", "For investor's attention", "Investor charter"
  ];

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/zerodhaonline",
      icon: "🐦"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/zerodha.social",
      icon: "📘"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dewyrahul?igsh=MWQ1NWx4NWt1bnF1MA==",
      icon: "📷"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rahul-kumar-b0b8b733b",
      icon: "💼"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@zerodha",
      icon: "📺"
    },
    {
      name: "Telegram",
      url: "https://t.me/zerodha",
      icon: "📡"
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha Logo"
              className="footer-logo"
            />
            <p className="brand-description">
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-links">
              <h3 className="links-title">Company</h3>
              <ul className="links-list">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h3 className="links-title">Support</h3>
              <ul className="links-list">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h3 className="links-title">Account</h3>
              <ul className="links-list">
                {accountLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Text */}
        <div className="legal-section">
          <div className="legal-text">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
              CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
              NSE-50001 – SEBI Registration no.: INZ000038238. Registered Address: Zerodha Broking Ltd.,
              #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking,
              please write to <a href="mailto:complaints@zerodha.com" className="legal-link">complaints@zerodha.com</a>; for DP-related queries,
              write to <a href="mailto:dp@zerodha.com" className="legal-link">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
            </p>
            
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details
              for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
              Effective Communication, Speedy redressal of the grievances.
            </p>
            
            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism.
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            
            <p>
              Attention investors: 1) Stock brokers can accept securities as margins from clients only
              by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail
              and phone number with your stock broker / depository participant and receive OTP directly
              from depository on your e-mail and/or mobile number to create pledge. 3) Check your
              securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            
            <p>
              India's largest broker based on net worth as per NSE. NSE broker factsheet.
            </p>
            
            <p>
              "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with
              your stock brokers. Receive information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of investors.
              KYC is one-time exercise while dealing in securities markets - once KYC is done through a SEBI
              registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process
              again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO,
              there is no need to issue a cheque. Please write the Bank account number and sign the IPO
              application form to authorize your bank to make payment in case of allotment. In case of non
              allotment the funds will remain in your bank account. As a business we don't give stock tips,
              and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be
              part of Zerodha and offering such services, please create a ticket here.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="footer-bottom">
          <div className="bottom-links">
            {bottomLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="bottom-link"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;