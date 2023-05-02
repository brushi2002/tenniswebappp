import React from "react";
import "./player.css"

const Player = ({ player }) => {
    return ( 
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{player.name}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{player.Rating}</h3>
            </div>
        </div>
     );
}
 
export default Player;