import { graphql, useStaticQuery } from "gatsby"

export const useMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return data.site.useMetadata
}
