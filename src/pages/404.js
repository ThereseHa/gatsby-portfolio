import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>404: Something went wrong... This page could not be found.</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
