import React from 'react'
import Score from './Score'

const Student = (props) => {
    const scores = props.scores.map((score, index) => {
        return <Score
            date={score.date}
            score={score.score}
        />
    })
    return (
        <div className="student-box">
            <h2>{props.name}</h2>
            <p className="indent">{props.bio}</p>
            <h3>Scores</h3>
            <div className="score-box">
                {scores}
            </div>
        </div>
    )
}
export default Student