import React from 'react'

const Score = (props) => {
    return (
        <div className="little-score-box">
            <p className="white">Date: {props.date}</p>
            <p className="white">Score: {props.score}</p>
        </div>
    )
}
export default Score