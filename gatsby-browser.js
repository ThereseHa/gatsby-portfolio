/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

// gatsby-browser.js
import React from "react"
import "./src/css/style.css" // Import your global styles

export const onClientEntry = async () => {
  // Load your fonts dynamically
  const link = document.createElement("link")
  link.href =
    "https://fonts.googleapis.com/css2?family=Raleway:wght@300;700&display=swap"
  link.rel = "stylesheet"
  document.head.appendChild(link)
}
