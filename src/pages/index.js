import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const list = data.allContentfulWhatsNew.edges.map((l, i) => (
    <li key={i}>{l.node.heading}</li>
  ))
  console.log(list)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>A simple Gatsby-Contentful-Netlify Project</h1>
      <p>Checking pipeline. And others</p>
      <ul>{list}</ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulWhatsNew {
      edges {
        node {
          heading
        }
      }
    }
  }
`
