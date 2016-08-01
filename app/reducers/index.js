import { combineReducers } from 'redux'
import NumberOfTeapots  from './NumberOfTeapots'
import StatusOfTeapot from './StatusOfTeapot'
import PotMakers from './PotMakers'
import TeapotAge from './TeapotAge'

const MainReducer = combineReducers({
  numberOfTeapots: NumberOfTeapots,
  teapotStatus: StatusOfTeapot,
  teapotAge: TeapotAge,
  potMakers: PotMakers
})

export default MainReducer
