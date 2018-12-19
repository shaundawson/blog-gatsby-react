import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
function BlogPost() {
    return (
        <Layout>
            <div>
                hello post
        </div>
        </Layout>
    )
}
export default BlogPost
const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }