import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import SIUnit from './SIUnit';

const crownIcon = <FontIcon className="icon-crown" style={{marginTop: '6px'}} />;
const crown = (
    <Avatar icon={crownIcon}
        size={20}
        style={{marginRight: '5px'}}
        backgroundColor={'#fdd835'} />
);
const grave = <span dangerouslySetInnerHTML={{__html: '&#x2020; '}} />;

const LeaderboardWidget = ({ potMakers }) => {
    const renderRow = (maker, icon) => {
        return (
            <TableRow key={maker.name} selectable={false}>
                <TableRowColumn>
                    {icon}
                    {maker.name}
                </TableRowColumn>
                <TableRowColumn>{maker.numberOfPotsMade}</TableRowColumn>
                <TableRowColumn>
                    <SIUnit number={maker.totalWeightMade} unit={"g"} precision={4} />
                </TableRowColumn>
                <TableRowColumn>{maker.numberOfCupsMade}</TableRowColumn>
                <TableRowColumn>
                    <SIUnit number={maker.largestSinglePot} unit={"g"} precision={4} />
                </TableRowColumn>
            </TableRow>
        );
    }
    let filteredMakers = potMakers.filter((maker) => maker.numberOfPotsMade !== 0);
    const tableRows = filteredMakers.map((maker, index) => {
        let icon;
        if (index === 0) {
            icon = crown;
        }
        else if (maker.inactive) {
            icon = grave;
        }
        return renderRow(maker, icon);
    });
    return (
        <Paper className="paper" style={{flex: 1}}>
            <div className="paper__icon">
                <Avatar src="robot.jpg" />
            </div>
            <div className="paper__title">Tea-derboard</div>
            <div className="paper__table-container">
                <Table>
                    <TableBody displayRowCheckbox={false} selectable={false}>
                      <TableRow selectable={false}>
                        <TableHeaderColumn>Who</TableHeaderColumn>
                        <TableHeaderColumn># of Pots</TableHeaderColumn>
                        <TableHeaderColumn>Total Weight</TableHeaderColumn>
                        <TableHeaderColumn># of Cups</TableHeaderColumn>
                        <TableHeaderColumn>Heaviest Pot</TableHeaderColumn>
                      </TableRow>
                      {tableRows}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
};

LeaderboardWidget.propTypes = {
    potMakers: PropTypes.array.isRequired
};

export default LeaderboardWidget;
