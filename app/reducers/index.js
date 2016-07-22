import { combineReducers } from 'redux'
import NumberOfTeapots  from './NumberOfTeapots'

const MainReducer = combineReducers({
  numberOfTeapots: NumberOfTeapots
})

export default MainReducer
