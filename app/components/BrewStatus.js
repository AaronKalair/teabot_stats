import React, { PropTypes } from 'react';
import IconCard from './IconCard';
import CircularProgress from 'material-ui/CircularProgress';


function getBrewState(age) {
    if (age < 1) {
        return {icon: 'hourglass-1', color: '#fdd835'};
    } else if (age < 2) {
        return {icon: 'hourglass-2', color: '#fdd835'};
    } else if (age < 3) {
        return {icon: 'hourglass-3', color: '#fdd835'};
    } else if (age < 3.25) {
        return {icon: 'ok', color: '#43a047'};
    } else if (age < 30) {
        return {icon: 'emo-happy', color: '#43a047'};
    } else {
        return {icon: 'emo-unhappy', color: '#e53935'};
    }
}

const BrewStatus = ({ teapotAge }) => {
    const { icon, color } = getBrewState(teapotAge);
    let teapotProgress = 100;
    let progressColor = 'rgba(0, 0, 0, 0)';
    if (teapotAge < 3){
        teapotProgress = teapotAge * 33.3;
        progressColor = color;
    }
    return (
        <IconCard icon={icon} backgroundColor={color} width="32%">
            <div className="paper__progress-container">
                <CircularProgress color={progressColor} mode={'determinate'} value={teapotProgress} />
            </div>
            <div className="paper__teapot-age">
              {Math.floor(teapotAge)} minutes old
            </div>
        </IconCard>
    );
};

BrewStatus.propTypes = {
    teapotAge: PropTypes.number.isRequired
};

export default BrewStatus;
