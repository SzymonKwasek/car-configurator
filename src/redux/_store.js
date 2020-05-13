import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Engine } from './Engine'
import { Model } from './Model'

const allReducers = combineReducers({
    Engine,
    Model
  })

  const store = createStore(allReducers)

export default store 