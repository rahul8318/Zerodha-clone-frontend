import React from "react";

function Footer() {
    const bottomLinks = [
    "NSE",
    "BSE",
    "MCX",
    "Terms & conditions",
    "Policies & procedures",
    "Privacy policy",
    "Disclosure",
    "For investor's attention",
    "Investor charter",
  ];
  return (
    <footer className="bg-light text-dark border-top">
    <div className="container mt-5 ">
      <div className="row mt-5">
        <div className="col mt-2">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            height="20"
            className="d-inline-block align-top mb-3"
          />
          <p className="text-muted" style={{ fontSize: "13px", fontWeight: "500" }}>
            © 2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="col">
          <h2 className="fs-4 mb-3">Company</h2>
          <ul className="list-unstyled" style={{ padding: 0 }}>
            {[
              "About",
              "Product",
              "Pricing",
              "Referral Programme",
              "Careers",
              "Zerodha tech",
              "Press & media",
              "Zerodha Cares (CSR)",
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <h2 className="fs-4 mb-3">Support</h2>
          <ul className="list-unstyled" style={{ padding: 0 }}>
            {[
              "Contact",
              "Support Portal",
              "Z-Connect blogs",
              "List of Charges",
              "Download & resources",
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <h2 className="fs-4 mb-3">Account</h2>
          <ul className="list-unstyled" style={{ padding: 0 }}>
            {["Open an account", "Fund Transfer", "60 days challenge"].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-muted" style={{ textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="fs-6 text-muted mt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
            NSE-50001 – SEBI Registration no.: INZ000038238. Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking,
            please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>; for DP-related queries,
            write to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
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
        <div className="footer-bottom py-3" >
        <div className="container d-flex flex-wrap justify-content-center text-center">
          {bottomLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className= "  text-black mx-2 text-decoration-none mb-2 text-muted"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
