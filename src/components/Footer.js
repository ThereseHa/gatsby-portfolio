// src/components/Footer.js
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        kontakt
        copyright
      }
    }
  `)

  const { kontakt, copyright } = data.contentfulFooter

  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row">
          {/* Contact Information Column */}
          <div className="col-md-4">
            <h3>Contact Me</h3>
            <p>{kontakt}</p>
          </div>

          {/* Empty Column for Spacing */}
          <div className="col-md-4"></div>

          {/* Copyright Column */}
          <div className="col-md-4 text-center">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
