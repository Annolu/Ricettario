import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout.js";
import "./recipe-post.css";

export default function Template ({data}) {
  const recipe = data.markdownRemark;

  return (
    <Layout>
    <div className="back-link-wrapper">
      <Link to='/'>Back</Link>
    </div>
      <div className="recipe-body" style={{}}>
        <h1>{recipe.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: recipe.html}}/>
        <p>{recipe.excerpt}</p>
      </div>
      <footer></footer>
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
