import React from 'react';
import './NavBar.css'
import Bumping from '../Bumping/Bumping'
import CreateAPlaylist from '../CreateAPlaylist/CreateAplaylist';
import PlaylistPlayer from '../PlaylistPlayer/PlaylistPlayer';



class Navbar extends React.Component {
    render() {
        return (
            <div>
                 <navbar className="NavBar">
      <ul>
          <li>{<Bumping/>}</li>
          <li>{<CreateAPlaylist/>}</li>
          <li>{<PlaylistPlayer/>}</li>
      </ul>
  </navbar>
            </div>
        );
    }
}


export default Navbar;