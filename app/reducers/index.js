import { combineReducers } from 'redux'
import NumberOfTeapots  from './NumberOfTeapots'
import StatusOfTeapot from './StatusOfTeapot'
import PotMakers from './PotMakers'

const MainReducer = combineReducers({
  numberOfTeapots: NumberOfTeapots,
  teapotStatus: StatusOfTeapot,
  potMakers: PotMakers
})

export default MainReducer
