import React from "react"
import "./Certification.scss"
import CertificateCard from "./certificationCard/CertificationCard"

const Certification = () => {
  return (
    <div className="certificate section-padding">
      <h3 className="main-heading">My Certificate and Badges</h3>
      <div className="card-box">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </div>
  )
}

export default Certification