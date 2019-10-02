import React from 'react'

const Hightlights = () => {
    return (
        <div className='highLights'>
            <h1>SCRATCH-MADE IN DENVER</h1>
            <ul><h3>Here's how we're different</h3>
            <li><img src={require('./img/home/knife_board.svg')} alt="PreFare" />
                Chef-prepped ingredients</li>
            <li><img src={require('./img/home/truck.svg')} alt="PreFare" />
                Door-to-door delivery</li>
            <li><img src={require('./img/home/recycle.svg')} alt="PreFare" />
                Minimal waste</li>
            </ul>
        </div>
    )
}

export default Hightlights