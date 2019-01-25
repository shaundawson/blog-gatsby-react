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
            { name: 'description', content: 'Black Friends Dinner is a table side conversation where guests navigate what it means to value Black lives in a world that does not.' },
            { name: 'keywords', content: 'podcast, black friends dinner, nandikayyy' },

            
          ]}
          script={[
            { 'src': 'https://use.fontawesome.com/releases/v5.0.7/js/all.js'},

          ]}

          link={[
            {'rel':'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'},
            {'rel':'stylesheet', 'href': 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'},

          ]}
        >
        <html lang="en" />
        </Helmet>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        <footer className="footer">
        <div className="content has-text-centered" >
        <p>
              <strong>Streaming on
               <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hdWRpb2Jvb20uY29tL2NoYW5uZWxzLzQ5ODI3MzgucnNz" target="_blank" rel="noopener noreferrer" >    Google Play,</a>
               <a href="https://itunes.apple.com/us/podcast/black-friends-dinner/id1447664860?mt=2&ls=1&ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer" >    Itunes, </a>
               <a href="https://open.spotify.com/show/5xBPxVpKQxE1Ut5TkEWLjH" target="_blank" rel="noopener noreferrer" >    Spotify,</a>
               <a href="https://audioboom.com/channels/4982738.rss" target="_blank"  rel="noopener noreferrer">    and RSS</a>.
               </strong>
               <br></br>
              This site was coded by 
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