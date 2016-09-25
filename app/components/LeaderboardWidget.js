import React, { PropTypes } from 'react';

const LeaderboardWidget = ({ potMakers }) => (
    <div>
        <h1> Leaderboard </h1>
        <table style={{'margin-right':'auto', 'margin-left': 'auto'}}>
        <tbody>
          <tr>
            <th>Who</th>
            <th># of Pots</th>
            <th>Total Weight</th>
            <th># of Cups</th>
            <th>Heaviest Pot</th>
          </tr>
            {
              potMakers.map(function(maker) {
                return <tr key={maker.name}>
                    <td>{maker.name}</td>
                    <td>{maker.numberOfPotsMade}</td>
                    <td>{maker.totalWeightMade}</td>
                    <td>{maker.numberOfCupsMade}</td>
                    <td>{maker.largestSinglePot}</td>
                </tr>
              })
            }
        </tbody>
        </table>
    </div>
)

LeaderboardWidget.propTypes = {
    potMakers: PropTypes.array.isRequired,
}

export default LeaderboardWidget
