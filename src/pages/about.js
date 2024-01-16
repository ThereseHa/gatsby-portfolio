// src/pages/about.js
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer" //Denna behövdes av någon anledning för att rendera rich texten.
import Layout from "../components/layout"

const AboutPage = ({ data }) => {
  const { title, description, image } = data.contentfulPage
  const img = getImage(image)

  // Define options for rendering rich text
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { url, description } = node.data.target.fields.file["en-US"]
        return <img src={url} alt={description} />
      },
      // Add more renderers for other embedded types as needed
    },
  }

  return (
    <Layout>
      <div className="text-center p-4 max-width-container">
        {" "}
        {/* Centering content with padding and limiting width */}
        <h1>{title}</h1>
        <div
          className="text-content"
          style={{ maxWidth: "800px", margin: "auto" }}
        >
          {documentToReactComponents(JSON.parse(description.raw), options)}
        </div>
        {img && (
          <GatsbyImage alt={title} image={img} style={{ maxWidth: "100%" }} />
        )}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    contentfulPage(slug: { eq: "about" }) {
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
    }
  }
`

export default AboutPage
