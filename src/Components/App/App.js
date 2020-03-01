import React from 'react';
import './App.css';
 
import {Switch, Route } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import Play from '../Play/Play'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';
import Bumping from '../Bumping/Bumping';
import About from '../About/About';
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
          <Route exact path='/about' component={About}/> 
          <Route exact path='/create-a-playlist' component={CreateAPlaylist}/> 
          <Route exact path='/playlist-player' component={PlaylistPlayer}/>
        </Switch>
{/*       
  <SearchBar onSearch={this.search}/> */}
{/*  
   <Play/>
   <Footer/> */}
 </div>
</div>
     </div>
   );
 }
}
 
 
export default App;
 

