import React from "react";
import "../Styles/Thoughts.css";
import signin from "../Images/Design/signin.jpg";
import register from "../Images/Design/register.jpg";
//import patienthistory from "../Images/Design/PATIENT HISTORIES.jpg";
import medical from "../Images/Design/MEDICAL RECORDS.jpg";
import appointment from "../Images/Design/APPOINTMENTS.jpg";
import prescription from "../Images/Design/PRESCRIPTION.jpg";
import xray from "../Images/Design/X-RAY AND SCAN.jpg";
import physio from "../Images/Design/PHYSIOTHERAPHY PLANS.jpg";

const PatientsDesign = () => {
  return (
    <main>
      <section className="designthinking">
        <div className="card">
          <img src={signin} alt="Sign IN" />
          <img src={register} alt="register" />
          {/* <img src={patienthistory} alt="patient history" /> */}
          <img src={medical} alt="medical" />
          <img src={appointment} alt="appointment" />
          <img src={prescription} alt="prescription" />
          <img src={xray} alt="x-ray" />
          <img src={physio} alt="Physio" />
        </div>
      </section>
    </main>
  );
};

export default PatientsDesign;
