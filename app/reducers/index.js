import { combineReducers } from 'redux';
import NumberOfTeapots  from './NumberOfTeapots';
import NumberOfCupsRemaining from './NumberOfCupsRemaining';
import PotMakers from './PotMakers';
import TeapotAge from './TeapotAge';

const MainReducer = combineReducers({
    numberOfTeapots: NumberOfTeapots,
    numberOfCupsRemaining: NumberOfCupsRemaining,
    teapotAge: TeapotAge,
    potMakers: PotMakers
});

export default MainReducer;
