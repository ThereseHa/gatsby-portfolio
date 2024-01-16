import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

//i dev mode overridas denna sida av en inbyggd 404-sida
const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
