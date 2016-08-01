import { combineReducers } from 'redux'
import NumberOfTeapots  from './NumberOfTeapots'
import StatusOfTeapot from './StatusOfTeapot'
import TeapotAge from './TeapotAge'

const MainReducer = combineReducers({
  numberOfTeapots: NumberOfTeapots,
  teapotStatus: StatusOfTeapot,
  teapotAge: TeapotAge
})

export default MainReducer
