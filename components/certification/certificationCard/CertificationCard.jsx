import React from "react"
import { certificate } from "./image"
import "./CertificationCard.scss"
// import { Link } from "react-router-dom"
import Link from "next/link"

const CertificateCard = () => {
  return (
    <div className="cer-card">
      <div className="cer-image">
        <img src={certificate} />
      </div>
      <div className="cer-details">
        <h4>Javascript Certicifate</h4>
        <p>22-05-2023</p>
        <div>
          <Link className="small-cm-btn" href="/">
            See Certificate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard