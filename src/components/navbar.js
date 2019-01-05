import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <h1>
      Black Friends Dinner
      </h1>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
    <div class="navbar-end">
    <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item" href="/about">
        About
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Episodes
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="/episodes">
           All Episodes
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item" href="/guests" >
          Browse Guests
          </a>
        </div>
      </div>
      <a class="navbar-item" href="/contact">
      Contact
    </a>
    </div>
  </div>
</div>
</nav>
</div>
)

export default Header