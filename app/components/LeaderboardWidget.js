import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const LeaderboardWidget = ({ potMakers }) => (
    <div className='large-card' >
        <Card>
            <CardHeader
                title="Leaderboard"
                avatar="robot.jpg" />
            <Table style={{'margin-right':'auto', 'margin-left': 'auto'}}>
            <TableBody displayRowCheckbox={false} selectable={false}>
              <TableRow displayRowCheckbox={false} selectable={false}>
                <TableHeaderColumn>Who</TableHeaderColumn>
                <TableHeaderColumn># of Pots</TableHeaderColumn>
                <TableHeaderColumn>Total Weight</TableHeaderColumn>
                <TableHeaderColumn># of Cups</TableHeaderColumn>
                <TableHeaderColumn>Heaviest Pot</TableHeaderColumn>
              </TableRow>
                {
                  potMakers.map(function(maker) {
                    if(maker.numberOfPotsMade == 0) {
                        return
                    }
                    return <TableRow key={maker.name} displayRowCheckbox={false} selectable={false}>
                        <TableRowColumn>{maker.name}</TableRowColumn>
                        <TableRowColumn>{maker.numberOfPotsMade}</TableRowColumn>
                        <TableRowColumn>{maker.totalWeightMade}</TableRowColumn>
                        <TableRowColumn>{maker.numberOfCupsMade}</TableRowColumn>
                        <TableRowColumn>{maker.largestSinglePot}</TableRowColumn>
                    </TableRow>
                  })
                }
            </TableBody>
            </Table>
        </Card>
    </div>
    
)

LeaderboardWidget.propTypes = {
    potMakers: PropTypes.array.isRequired,
}

export default LeaderboardWidget
