import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        {
          allWordpressPage {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `}
      render={props => (
        <div>
          {props.allWordpressPage.edges.map(page => (
            <div key={page.node.id}>
              <h1>{page.node.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
            </div>
          ))}
        </div>
      )}
    ></StaticQuery>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
