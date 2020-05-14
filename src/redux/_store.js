import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Engine } from './Engine'
import { Model } from './Model'
import { Gear } from './Gear'
import { Color } from './Color'
import { Price } from './Price'

const allReducers = combineReducers({
    Engine,
    Model,
    Gear,
    Color,
    Price
  })

  const store = createStore(allReducers)

export default store 