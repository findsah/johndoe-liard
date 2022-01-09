import React from 'react';
import exchange from '../../../assets/exchange.png'
import games from '../../../assets/games.png'
import marketplace from '../../../assets/marketplace.png'
import defiIcon from '../../../assets/defiIcon.png'
import collections from '../../../assets/collections.png'
import others from '../../../assets/others.png'

const Filters = () => {
    return (
        <div>
            <input type="checkbox" id="all" name="all" value="Bike" />
            <label style={{ margin: "0 10px 10px" }}>
                All Experiences
            </label>
            <label className='filterLabels'>
                <input type="checkbox" id="Exchanges" name="Exchanges" value="Car" />
                <img className='filterIcons' src={exchange}  alt='exchange' />
                Exchanges
            </label>
            <label className='filterLabels'>
                <input type="checkbox" id="Games" name="Games" value="Boat" />
                <img className='filterIcons' src={games} alt='games' />
                Games
            </label>
            <label className='filterLabels'>
                <input type="checkbox" id="Marketplace" name="Marketplace" value="Bike" />
                <img className='filterIcons' src={marketplace} alt='marketplaceimg' />
                Marketplace
            </label>
            <label className='filterLabels'>
                <input type="checkbox" id="Defi" name="Defi" value="Car" />
                <img className='filterIcons' src={defiIcon} alt='defiIconimg' />
                Defi
            </label>
            <label className='filterLabels'>
                <input type="checkbox" id="Collectibles" name="Collectibles" value="Boat" />
                <img className='filterIcons' src={collections} alt='collectionsimg' />
                Collections
            </label>
            <label className='filterLabels'>
                <input type="checkbox" id="Others" name="Others" value="Boat" />
                <img className='filterIcons' src={others} alt='othersimg' />
                Others
            </label>
        </div >
    )
}

export default Filters
