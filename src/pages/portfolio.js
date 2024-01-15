import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItems {
        edges {
          node {
            id
            title
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
  `)

  return (
    <Layout>
      <h1>Portfolio Page</h1>

      <ul className="posts">
        {data.allContentfulPortfolioItems.edges.map(edge => {
          const image = getImage(edge.node.heroImage)

          return (
            <li key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <GatsbyImage alt={edge.node.title} image={image} />
              <p>{edge.node.description.description}</p>
            </li>
          )
        })}
      </ul>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
