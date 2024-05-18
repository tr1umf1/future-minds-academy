// src/components/Nav.js
import React from 'react';

function Nav() {
    function populateMovies(value) {
        console.log(`Populate movies with genre id: ${value}`);
        // Add your functionality here
    }

    return (
        <nav className="col-1 white">
            <div className="allGernes">
                <div className="row">
                    <div className="col-3">
                        <select className="p-0 movieGernes" onChange={(e) => populateMovies(e.target.value)}>
                            <option value="0">Actions</option>
                            <option value="1">Commedy</option>
                        </select>
                    </div>
                    <div className="col-1 play-pause">
                        <p className="play"><a href="#"><img src="assets/img/play.png" alt="Play" /></a></p>
                    </div>
                </div>
            </div>
            <div className="gerneFeed">
                <ul className="movielist">
                    <li className="selected-movie">
                        <h4>Plane</h4>
                        <img src="assets/img/plane.png" alt="Plane" />
                        <p className="description">On an initially routine flight, the protagonist ends up saving passengers through an emergency landing following a lightning strike.</p>
                        <div className="row movie-stats m0 p0">
                            <div className="col m0 p0">Date: <span>01-03-2023</span> </div>
                            <div className="col m0 p0">Length: <span>108</span> </div>
                        </div>
                    </li>
                    <li>
                        <h4>Plane</h4>
                        <img src="assets/img/kill-boksoon.png" alt="Kill Boksoon" />
                        <p className="description">A South Korean crime action movie, Kill Boksoon has mostly flown under the radar but deserves much more attention from viewers and critics alike.</p>
                        <div className="row movie-stats m0 p0">
                            <div className="col m0 p0">Date: <span>01-03-2023</span> </div>
                            <div className="col m0 p0">Length: <span>108</span> </div>
                        </div>
                    </li>
                    <li>
                        <h4>Plane</h4>
                        <img src="assets/img/plane.png" alt="Plane" />
                        <p className="description">This is some movie description</p>
                        <div className="row movie-stats m0 p0">
                            <div className="col m0 p0">Date: <span>01-03-2023</span> </div>
                            <div className="col m0 p0">Length: <span>108</span> </div>
                        </div>
                    </li>
                    <li>
                        <h4>Plane</h4>
                        <img src="assets/img/plane.png" alt="Plane" />
                        <p className="description">This is some movie description</p>
                        <div className="row movie-stats m0 p0">
                            <div className="col m0 p0">Date: <span>01-03-2023</span> </div>
                            <div className="col m0 p0">Length: <span>108</span> </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
