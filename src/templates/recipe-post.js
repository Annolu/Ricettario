import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout.js";

export default function Template ({data}) {
  const recipe = data.markdownRemark;

  return (
    <Layout>
    <div style={{borderBottom: '1px solid grey', marginBottom: '20px'}}>
      <Link to='/'>Back</Link>
    </div>
      <div style={{textAlign:'center', padding: '10px 140px'}}>
        <h1>{recipe.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: recipe.html}}/>
        <p>{recipe.excerpt}</p>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path : {eq: $path}}){
      html
      frontmatter{
        path
        title
      }
    }
  }
`
