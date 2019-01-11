import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Episodes = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
  <Layout>
  <section className="section">
  <div className="container">
    <h1 className="title is-3">All Episodes</h1>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link" >
          <div className="post-list">
            <p className="title is-4">{node.frontmatter.title}</p>
            <p className="subtitle is-7">{node.frontmatter.date}</p>
            <p className="subtitle is-7"> Guests: {node.frontmatter.tags}</p>            
          </div>
        </Link>
      ))}
      </div>
    </section>
    </Layout>
  )
}

export default Episodes;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            tags
          }
        }
      }
    }
  }
`