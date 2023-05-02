import React from "react";
import Player from "../player";

const FeaturedPlayer = ({ player }) => {
    if(player)
        return (  
            <div>
                <div className="row featuredPlayer">
                    <h3 className="col-md-12 text-center">Featured Player</h3>
                </div>
                <Player player={player} />
            </div>
        );
    return <div> No featured player at this time</div>
}
 
export default FeaturedPlayer;