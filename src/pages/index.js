import React from 'react'
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
    <Layout>
    <SEO title="Home" />
      <div>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h1>{post.node.frontmatter.title}</h1>
            <p>{post.node.excerpt}</p>
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
          </div>
        ))}
      </div>
    </Layout>
  )

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
          excerpt
          id
        }
      }
    }
  }
`
export default IndexPage;
