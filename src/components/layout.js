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
        <footer className="footer">
        <div className="content has-text-centered is-small" >
        <p>
              <strong>Streaming on
               <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hdWRpb2Jvb20uY29tL2NoYW5uZWxzLzQ5ODI3MzgucnNz" target="_blank" rel="noopener noreferrer" >    Google Play,</a>
               <a href="https://itunes.apple.com/us/podcast/black-friends-dinner/id1447664860?mt=2&ls=1&ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer" >    Itunes, </a>
               <a href="https://open.spotify.com/show/5xBPxVpKQxE1Ut5TkEWLjH" target="_blank" rel="noopener noreferrer" >    Spotify,</a>
               <a href="https://audioboom.com/channels/4982738.rss" target="_blank"  rel="noopener noreferrer">    and RSS</a>.
               </strong>
               <br></br>
              This site was created by 
              <a href="http://www.iamsdawson.com" target="_blank" rel="noopener noreferrer"> Shaun Dawson</a>. 
            </p>
          </div>
        </footer>
        </div>
      </>
    )}
  />
  
)



export default Layout