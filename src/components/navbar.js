import React from 'react';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-purple"
          aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
          <span className="icon" style={{ color: '#fff',}}>
          <i className="fas fa-headphones"></i>
        </span>
            <span>Black Friends Dinner Podcast</span>
          </a>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <a className="navbar-item" href="/about">
              About
            </a>
            <a className="navbar-item" href="/episodes">
              Episodes
            </a>
            <a className="navbar-item" href="/contact">
            Contact
            </a>
          </div>
          <div className="navbar-end">
          <a className="navbar-item" href="https://www.facebook.com/BlackFriendsDinner/" href='/contact'>
        </a>
            <a className="navbar-item" href="https://twitter.com/blackfriendsdin" target="blank">
              <span className="icon" style={{ color: '#fff',}}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.facebook.com/BlackFriendsDinner/" target="blank">
              <span className="icon" style={{ color: '#fff',}}>
                <i className="fab fa-lg fa-facebook"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header