import React from 'react'



const Header = ({ siteTitle }) => (

  
  <div>
  <nav className="navbar is-black">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
    <h1>
    Black Friends Dinner Podcast
    </h1>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample" >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>
      <a className="navbar-item" href="/about">
      About
      </a>
      <a className="navbar-item" href="/contact">
      Contact
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="">
          Subscribe
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hdWRpb2Jvb20uY29tL2NoYW5uZWxzLzQ5ODI3MzgucnNz" target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
          <a className="navbar-item" href="https://itunes.apple.com/us/podcast/black-friends-dinner/id1447664860?mt=2&ls=1&ign-mpt=uo%3D4" target="_blank" rel="noopener noreferrer" > 
            Itunes
          </a>
          <a className="navbar-item" href="https://open.spotify.com/show/5xBPxVpKQxE1Ut5TkEWLjH" target="_blank" rel="noopener noreferrer"> 
            Spotify
          </a>
          <a className="navbar-item" href="https://radiopublic.com/black-friends-dinner-6B3V9q" target="_blank"  rel="noopener noreferrer">  
            Radio Public
        </a>
          <hr className="navbar-divider"></hr>
          <a className="navbar-item" href="https://audioboom.com/channels/4982738.rss" target="_blank"  rel="noopener noreferrer">  
            RSS
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link is-warning" href="/episodes">
      Search
    </a>
    <div className="navbar-dropdown is-boxed">
      <a className="navbar-item" href="/episodes">
       All Episodes
      </a>
    </div>
  </div>
</div>
</nav>

</div>
)
export default Header

