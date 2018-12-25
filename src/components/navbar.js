import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://blackfriendsdinner.com">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
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

      <a class="navbar-item">
        About
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Episodes
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="/episode1">
            Episode 001: 
          </a>
          <a class="navbar-item">
            Episode 002: 
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
          </a>
        </div>
        <a class="navbar-item" href="/contact">
        Contact
      </a>
      </div>
    </div>
  </div>
</div>
</nav>
</div>
)

export default Header