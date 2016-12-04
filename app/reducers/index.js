import { combineReducers } from 'redux';
import NumberOfTeapots  from './NumberOfTeapots';
import NumberOfCupsRemaining from './NumberOfCupsRemaining';
import PotMakers from './PotMakers';
import TeapotAge from './TeapotAge';
import NumberOfTeapotRequests from './NumberOfTeapotRequests';

const MainReducer = combineReducers({
    numberOfTeapots: NumberOfTeapots,
    numberOfCupsRemaining: NumberOfCupsRemaining,
    teapotAge: TeapotAge,
    potMakers: PotMakers,
    NumberOfTeapotRequests: NumberOfTeapotRequests
});

export default MainReducer;
