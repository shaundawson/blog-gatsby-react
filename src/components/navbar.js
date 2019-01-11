import React from 'react'


const Header = ({ siteTitle }) => (
  <div>
  <nav className="navbar is-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
    <i className="large material-icons">graphic_eq</i>
      <h1>
      Black Friends Dinner Podcast
      </h1>
    </a>
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"> </span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
    <div className="navbar-end">
    <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <a className="navbar-item" href="/">
    <i className="fas fa-home"></i>
       Home
    </a>
      <a className="navbar-item" href="/about">
      <i className="fas fa-info-circle"></i>
        About 
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="/episodes">
        <i className="fas fa-search "></i>
          Episodes
        </a>
        <div className="navbar-dropdown">
          <a className="navbar-item" href="/episodes">
           All Episodes
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item" href="/guests" >
          Browse Guests
          </a>
        </div>
      </div>
      <a className="navbar-item" href="/contact">
      <i className="fas fa-envelope "></i>
      Contact
    </a>
    </div>
  </div>
</div>
</nav>
</div>
)
export default Header