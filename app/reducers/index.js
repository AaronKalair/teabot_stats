import { combineReducers } from 'redux'
import NumberOfTeapots  from './NumberOfTeapots'
import StatusOfTeapot from './StatusOfTeapot'

const MainReducer = combineReducers({
  numberOfTeapots: NumberOfTeapots,
  teapotStatus: StatusOfTeapot
})

export default MainReducer
