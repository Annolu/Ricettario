import React from 'react'
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
    <Layout>
    <SEO title="Home" />
      <div style={{paddingTop: '20px'}}>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id} style={{padding: '20px 10px 10px 10px', textAlign: 'center', fontWeight: 'semi-bold', fontSize: '23px'}}>
            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
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
