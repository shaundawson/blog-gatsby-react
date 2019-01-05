import React from 'react'
import Helmet from 'react-helmet'
import './layout.css';
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Black Friends Dinner Podcast' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1000,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {children}
        </div>
        <footer class="footer">
          <div class="content has-text-centered">
              <p>
              <strong>Black Friends Dinner</strong> with <a href="https://iamsdawson.com">Nandikayyy</a>.
              </p>
          </div>
        </footer>
      </>
    )}
  />
)



export default Layout