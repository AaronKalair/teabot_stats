import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';

const iconStyles = {
    'balance-scale': {fontSize: '20px', margin: '10px 0px 8px 0px'},
    'crown': {fontSize: '22px', marginTop: '15px', marginLeft: '9px'},
    'cup': {fontSize: '20px', marginTop: '12px', marginLeft: '10px'},
    'hourglass-0': {fontSize: '20px', marginTop: '12px', marginLeft: '10px'},
    'hourglass-1': {fontSize: '20px', marginTop: '12px', marginLeft: '10px'},
    'hourglass-2': {fontSize: '20px', marginTop: '12px', marginLeft: '10px'},
    'hourglass-3': {fontSize: '20px', marginTop: '12px', marginLeft: '10px'},
    'teapot': {fontSize: '28px', top: '-3px', left: '-2px'},
};

const IconCard = ({ icon, title, color, backgroundColor, width, children }) => {
    const paperTitle = title ? <div className="paper__title">{title}</div> : null;
    const fontIcon = <FontIcon className={`icon-${icon}`} style={iconStyles[icon]} />;
    return (
        <Paper className="paper" style={{width: width}}>
            <div className="paper__icon">
                <Avatar icon={fontIcon} color={color} backgroundColor={backgroundColor} />
            </div>
            {paperTitle}
            {children}
        </Paper>
    );
};

IconCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.any,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.any
};

export default IconCard;
