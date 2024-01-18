// src/pages/about.js
import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

const ContactPage = ({ data }) => {
  const { title, description, image, linkedin, github } = data.contentfulPage
  const img = getImage(image)

  // Define options for rendering rich text
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { url, description } = node.data.target.fields.file["en-US"]
        return <img src={url} alt={description} />
      },
    },
  }

  return (
    <Layout>
      <div
        className="text-center p-4 max-width-container "
        style={{ maxWidth: "800px", margin: "auto" }}
      >
        {" "}
        {/* Centering content with padding and limiting width */}
        <h1>{title}</h1>
        <div className="text-content">
          {documentToReactComponents(JSON.parse(description.raw), options)}
          <p>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
      title
      description {
        raw
      }
      image {
        gatsbyImageData(
          width: 400
          height: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        description
      }
      linkedin
      github
    }
  }
`
export default ContactPage
