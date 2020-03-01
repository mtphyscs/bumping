import React from 'react';
import './App.css';
 
import {Switch, Route } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import Bumping from '../Bumping/Bumping'
import Play from '../Play/Play'
import NavBar from '../NavBar/Navbar';
import CreateAPlaylist from '../CreateAPlaylist/CreateAplaylist';
import PlaylistPlayer from '../PlaylistPlayer/PlaylistPlayer';
 
class App extends React.Component {
 render() {
   return (
     <div>
       <div>
       
 <div className="App">
   <NavBar />
   <Switch>
          <Route exact path='/home' component={Bumping}/> 
          <Route exact path='/create-a-playlist' component={CreateAPlaylist}/> 
          <Route exact path='/playlist-player' component={PlaylistPlayer}/>
        </Switch>
      
<div></div>
    
 </div>
</div>
     </div>
   );
 }
}
 
 
export default App;
 

