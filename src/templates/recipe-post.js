import React from "react";
import Link from "gatsby-link";

export default function Template ({data}) {
  const recipe = data.markdownRemark;

  return (
    <div>
      <Link to='/'>Back</Link>
      <hr />
      <h1>{recipe.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: recipe.html}}/>
      <p>{recipe.excerpt}</p>
    </div>
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
