import React, { Component } from 'react';
import Play from '../Play/Play';
import './PlaylistPlayer.css'

class PlaylistPlayer extends Component {
    render() {
        return (
            <div className="PlaylistPlayer">
                <Play/>
            </div>
        );
    }
}

export default PlaylistPlayer;