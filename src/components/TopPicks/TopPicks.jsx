import React from 'react';
import './TopPicks.scss';
import ArtBoards from '../../assets/images/top_picks_art_boards.png';
import HomeDecor from '../../assets/images/top_picks_home_decor.png';
import WoodenArts from '../../assets/images/top_picks_wooden_arts.png';
import WallLamps from '../../assets/images/top_picks_wall_lamps.png';

const TopPicks = () => {

    return (
        <div className={`top-picks-main-container`}>
            <p className={`top-picks-title`}>Our Top Picks</p>

            <div className={`top-picks-grid-container`}>
                <div className={`art-boards`}>
                    <img alt='art boards' src={ArtBoards} />
                    <p>Art Boards</p>
                </div>
                <div className={`home-decor`}>
                    <img alt='home decor' src={HomeDecor} />
                    <p>Home Decor</p>
                </div>
                <div className={`wooden-arts`}>
                    <img alt='wooden arts' src={WoodenArts} />
                    <p>Wooden Arts</p>
                </div>
                <div className={`wall-lamps`}>
                    <img alt='wall lamps' src={WallLamps} />
                    <p>Wall lamps</p>
                </div>
            </div>
        </div>
    )
}

export default TopPicks;