import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioTemplate = ({ data }) => {
  const project = data.contentfulPortfolioItems
  const image = getImage(project.heroImage)

  return (
    <Layout>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center" style={{ fontWeight: "bold" }}>
              {project.title}
            </h1>
            {image && (
              <div className="text-center mb-3">
                <GatsbyImage
                  image={image}
                  alt={project.title}
                  className="img-fluid"
                />
              </div>
            )}
            <p>{project.description.description}</p>
            {/* Add additional project information with Bootstrap styling */}
            {/* Back to Portfolio button */}
            <div className="text-center">
              <Link to="/portfolio" className="btn btn-dark">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItems(slug: { eq: $slug }) {
      title
      description {
        description
      }
      heroImage {
        gatsbyImageData(
          height: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

export default PortfolioTemplate
