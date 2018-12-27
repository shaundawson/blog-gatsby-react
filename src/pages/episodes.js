import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'

const Episodes = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
  <Layout>
  <section class="section">
  <div class="container">
    <h1 class="title">All Episodes</h1>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link" >
          <div className="post-list">
            <p class="title is-4">{node.frontmatter.title}</p>
            <p class="subtitle is-7">{node.frontmatter.date}</p>
            <p class="subtitle is-6">{node.excerpt}</p>            
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