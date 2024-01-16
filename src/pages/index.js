import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const IndexPage = ({ data }) => {
  const { title, presentationText, image } = data.contentfulHomePage

  // Define rendering options for rich text
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { url, description } = node.data.target.fields.file["en-US"]
        return <img src={url} alt={description} />
      },
    },
  }

  // Parse the raw JSON-like content and convert it to React components
  const richTextComponents = documentToReactComponents(
    JSON.parse(presentationText.raw),
    options
  )

  return (
    <Layout>
      <div className="text-center p-4">
        {" "}
        {/* Centering content with padding */}
        <h1>{title}</h1>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          {richTextComponents}
        </div>
        {image && image.url && (
          <img
            src={image.url}
            alt={image.description}
            style={{ maxWidth: "100%" }}
          />
        )}
        <Link to="/portfolio" className="btn btn-dark mt-3 hover-effect">
          See my portfolio
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      title
      presentationText {
        raw
      }
      image {
        url
        description
      }
    }
  }
`

export default IndexPage
