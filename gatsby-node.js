const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for PortfolioItems
  const portfolioResponse = await graphql(`
    query {
      allContentfulPortfolioItems {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create pages for PortfolioItems
  portfolioResponse.data.allContentfulPortfolioItems.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve("./src/templates/portfolio-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // Query for Page entries (for navigation menu)
  const pageResponse = await graphql(`
    query {
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `)

  // Create pages for Page entries (for navigation menu)
  pageResponse.data.allContentfulPage.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`, // Adjust the path based on your structure
      component: path.resolve("./src/pages/index.js"), // Example component, change accordingly
      context: {
        slug: node.slug,
      },
    })
  })
}
