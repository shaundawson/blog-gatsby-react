import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import '../pages/post.css'


function Guests(props) {
    const posts = props.data.allMarkdownRemark.edges;
    const { tag } = props.pageContext;
    return (
        <Layout>
        <br></br>
           <center> <h1>{`Available episodes with ${tag}`}</h1> </center>
            <div className="tags">
                {
                    posts.map(({ node }, i) => (
                        <Link to={node.fields.slug} key={i} >
                            {node.frontmatter.title}
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}


export default Guests;


export const query = graphql`
 query TagsQuery($tag: String!) {
allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
}
`