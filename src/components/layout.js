import * as React from "react"

import "../css/style.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <header></header>
    <Navbar /> {Navbar}
    <main>{children}</main>
    <Footer></Footer>
  </>
)

export default Layout
