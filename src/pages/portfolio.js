import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioPage = ({ data }) => {
  const projects = data.allContentfulPortfolioItems.edges

  return (
    <Layout>
      <div
        className="text-center p-3"
        style={{ maxWidth: "800px", margin: "auto" }}
      >
        {" "}
        {/* Centering content with padding */}
        <h1 className="mb-4">Portfolio Page</h1>
        <ul className="list-unstyled">
          {projects.map(({ node }) => {
            const image = getImage(node.heroImage)

            return (
              <li key={node.id} className="mb-4">
                <Link
                  to={`/portfolio/${node.slug}`}
                  className="text-decoration-none"
                >
                  <h2 className="h4 text-dark">{node.title}</h2>
                </Link>
                <GatsbyImage
                  alt={node.title}
                  image={image}
                  className="img-fluid mb-2"
                />
                <p className="text-dark">{node.description.description}</p>
              </li>
            )
          })}
        </ul>
        <Link to="/" className="btn btn-dark">
          Go back to the homepage
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPortfolioItems {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          heroImage {
            gatsbyImageData(
              width: 400
              height: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`

export default PortfolioPage
