import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


class Navbar extends Component {
    render() {
        return (
        <div>
  <nav className="nav-style">
      <ul>
        <li><Link to='/home'>Bumping</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/create-a-playlist'>Create A Playlist</Link></li>
        <li><Link to='/playlist-player'>Playlist Player</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
        </div>
        );
    }
}




export default Navbar;





