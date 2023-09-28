import React from "react";
import InformationCard from "./InformationCard";
import SupportCard from "./SupportCard";
import TestKit from "../Assets/TestKit.png";
import Lancet from "../Assets/Lancet.png";
import AlcoholSwab from "../Assets/AlcoholSwab.png";
import Stabilizer from "../Assets/Stabilizer.png";
import Referrals from "../Assets/Referrals.png";
import Councelling from "../Assets/Counseling.png";
import SupportGroups from "../Assets/SupportGroups.png";
import MentalHealth from "../Assets/MentalHealth.png";
import Financial from "../Assets/Financial.png";
import Legal from "../Assets/Legal.png";
import vedio from "../Assets/Testvedio.mp4";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        
        <h3 className="info-title">
          <span>How can I use the Kit?</span>
        </h3>
        <p className="info-sub-title">
          <span>Testing made easy</span>
        </p>
        <p className="info-description">
          Your Guide to Hassle-Free HIV self testing
          <br></br>{" "}
          <a href="#" className="instruction-manual">
            Learn More
          </a>
        </p>
        <div className="right-section">
            <video width="640" height="360" controls>
              <source src={vedio} type="video/mp4" />
            </video>
        </div>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Test Kit"
          description="The main component that detects HIV antibodies or antigens in the sample."
          image={TestKit}
        />

        <InformationCard
          title="Lancet"
          description="Tool used to prick the finger for blood collection."
          image={Lancet}
        />

        <InformationCard
          title="Alcohol Swab"
          description="Used to clean the area before pricking the finger."
          image={AlcoholSwab}
        />
        <InformationCard
          title="Stabilizer"
          description="Liquid used to prepare the blood sample for testing."
          image={Stabilizer}
        />
      </div>
      <div className="Support-section">
        <p className="Support-title">
          <span>Need Help?</span>
        </p>
        <div className="support-cards-content">
          <SupportCard image={Referrals} title="Referrals" />
          <SupportCard image={Councelling} title="Councelling" />
          <SupportCard image={SupportGroups} title="Support Groups" />
          <SupportCard image={MentalHealth} title="Mental Health" />
          <SupportCard image={Financial} title="Financials" />
          <SupportCard image={Legal} title="Legal Support" />
        </div>
      </div>
    </div>
  );
}

export default Info;
