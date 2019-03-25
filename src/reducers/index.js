import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * this below will be the structure of our Redux State,
 * if we write "import xyz from './todos'"
 * then State will be { xyz: [] } , here [], because todos.js's return statement
 */

export default combineReducers({
  todos,
  visibilityFilter
})

/**
 * you can also write:
 * mytodos: todos,...
 *
 * and state structure will be changed
 */