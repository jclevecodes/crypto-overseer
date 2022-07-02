import React from 'react'

import './Coins.css'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt='' />
            <p className='symbol'>{props.coins.symbol}</p>
        </div>
        <p>${props.coins.current_price.toFixed(1)}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(1)}%</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem