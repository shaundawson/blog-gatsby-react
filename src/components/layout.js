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
        <div>
          {children}
        </div>
        <footer class="footer">
          <div class="content has-text-centered">
              <p>
              <strong>Streaming</strong> on <a href="https://iamsdawson.com">ITUNES</a> <a href="https://iamsdawson.com">SPOTIFY</a> <a href="https://iamsdawson.com">GOOGLEPLAY</a>
              </p>
          </div>
        </footer>
      </>
    )}
  />
)



export default Layout